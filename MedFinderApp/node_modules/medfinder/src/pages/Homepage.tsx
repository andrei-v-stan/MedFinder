import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Topbar from './Topbar';
import '../styles/Topbar.css';
import '../styles/Homepage.css';


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

  const handleLetterClick = (letter) => {
    const filtered = medicines.filter((medicine) =>
      medicine.name.toLowerCase().startsWith(letter.toLowerCase())
    );
    setFilteredMedicines(filtered);
    setShowDropdown(true);
    setShowLetterMenu(false);
  };

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchText(searchTerm);
    const filtered = medicines.filter((medicine) =>
      medicine.name.toLowerCase().includes(searchTerm)
    );
    setFilteredMedicines(filtered);
    setShowDropdown(true);
  };

  const handleClick = () => {
    if (filteredMedicines.length === 0 && searchText === '') {
      setShowDropdown(false);
    } else if (filteredMedicines.length === 0) {
      const encodedSearchText = encodeURIComponent(searchText);
      window.location.href = `/interpreter?text=${encodedSearchText}`;
    } else {
      setShowDropdown(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (letterMenuRef.current && !letterMenuRef.current.contains(event.target)) {
        setShowLetterMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="search-container">
        <div className="letter-button">
          <img src="../../src/assets/homepage/LetterA.png" alt="Letter Button" onClick={() => setShowLetterMenu(!showLetterMenu)} />
        </div>
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={handleSearchChange}
          onClick={() => setShowLetterMenu(false)}
        />
        <div className="search-button">
          <img src="../../src/assets/homepage/Search.png" alt="Search Button" onClick={handleClick} />
        </div>
        {showDropdown && (
          <div className="dropdown">
            <ul className="dropdown-list">
              {filteredMedicines.map((medicine) => (
                <li key={medicine.id} className="dropdown-item">
                  <Link to={`/medicine/${medicine.id}/${encodeURIComponent(medicine.name)}`}>
                    <div className="dropdown-item-content">{medicine.name}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        {showLetterMenu && (
          <div className="letter-menu" ref={letterMenuRef}>
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
      <div className="content">
        <h1>MedFinder</h1>
        <h3>The people's health, medication and answers</h3>
        <SearchBar />
      </div>
    </>
  );
};

export default Home;
