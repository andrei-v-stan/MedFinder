import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Topbar from './Topbar';
import HomepageStyle from '../styles/Homepage.module.css';

function SearchBar() {
  const [medicines, setMedicines] = useState([]);
  const [filteredMedicines, setFilteredMedicines] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLetterMenu, setShowLetterMenu] = useState(false);
  const letterMenuRef = useRef(null);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/medicines');
        if (!response.ok) {
          throw new Error('[Error]: Network response was not ok');
        }
        const data = await response.json();
        setMedicines(data);
      } catch (error) {
        console.error('[Error]: Issues while fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleDropdownHide = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  const handleLetterMenuHide = (event) => {
    if (letterMenuRef.current && !letterMenuRef.current.contains(event.target)) {
      setShowLetterMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleDropdownHide);
    document.addEventListener('mousedown', handleLetterMenuHide);
    return () => {
      document.removeEventListener('mousedown', handleDropdownHide);
      document.removeEventListener('mousedown', handleLetterMenuHide);
    };
  }, []);

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchText(searchTerm);
    const filtered = medicines.filter((medicine) =>
      medicine.name.toLowerCase().includes(searchTerm)
    );
    setFilteredMedicines(filtered);
    setShowDropdown(true);
  };

  const handleSearchClick = () => {
    if (searchText === '') {
      setFilteredMedicines(medicines);
      setShowDropdown(true);
    } else if (filteredMedicines.length === 0) {
      const encodedSearchText = encodeURIComponent(searchText);
      window.location.href = `/interpreter?text=${encodedSearchText}`;
    } else {
      setShowDropdown(true);
    }
  };

  const handleLinkClick = () => {
    setShowDropdown(false);
  };

  const handleLetterClick = (letter) => {
    const filtered = medicines.filter((medicine) =>
      medicine.name.toLowerCase().startsWith(letter.toLowerCase())
    );
    setFilteredMedicines(filtered);
    setShowDropdown(true);
    setShowLetterMenu(false);
  };

  return (
    <>
      <div className={HomepageStyle.searchContainer}>
        <div className={HomepageStyle.letterButton}>
          <img src="../../src/assets/homepage/LetterA.png" alt="Letter Button" onClick={() => setShowLetterMenu(!showLetterMenu)} />
        </div>
        <input
          type="text"
          className={HomepageStyle.searchBar}
          placeholder="Search..."
          onChange={handleSearchChange}
          onClick={handleSearchClick}
          ref={inputRef}
        />
        <div className={HomepageStyle.searchButton}>
          <img src="../../src/assets/homepage/Search.png" alt="Search Button" onClick={handleSearchClick} />
        </div>
        {showDropdown && (
          <div className={HomepageStyle.dropdown} ref={dropdownRef}>
            <ul className={HomepageStyle.dropdownList}>
              {filteredMedicines.map((medicine) => (
                <li key={medicine.id} className={HomepageStyle.dropdownItem}>
                  <Link
                    to={`/medicine/${medicine.id}/${encodeURIComponent(medicine.name)}`}
                    onClick={handleLinkClick}
                  >
                    <div className={HomepageStyle.dropdownItemContent}>{medicine.name}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        {showLetterMenu && (
          <div className={HomepageStyle.letterMenu} ref={letterMenuRef}>
            {[
              'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
              'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', '', 'Y',
              'Z', '#', '*'
            ].map((letter) => (
              <button key={letter} onClick={() => handleLetterClick(letter)}>
                {letter}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

const Home: React.FC = () => {
  return (
    <>
      <Topbar />
      <div className={HomepageStyle.content}>
        <h1 className={HomepageStyle.title}>MedFinder</h1>
        <h3 className={HomepageStyle.subtitle}>The people's health, medication, and answers</h3>
        <SearchBar />
      </div>
    </>
  );
};

export default Home;
