import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Topbar.css';
import '../styles/Homepage.css';

function Topbar() {
  return (
    <>
    <div className="topbar">
      <Link to="/">
        <button className="logo-button">
          <img src="../../src/assets/topbar/Logo.png" alt="Logo Button" />
        </button>
      </Link>
      
      <button className="profile-button">
        <Link to="/profile">
          <img src="../../src/assets/topbar/Profile.png" alt="Profile Button" />
        </Link>
      </button>
      
    </div>
    <div className="spacer"></div>
    </>
  );
}


function SearchBar() {

  const [medicines, setMedicines] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/medicines');
        if (!response.ok) {
          throw new Error('[Error]: Network response was not ok');
        }
        const data = await response.json();
        setMedicines(data);
      } 
      catch (error) {
        console.error('[Error]: Issues while fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const [filteredMedicines, setFilteredMedicines] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = medicines.filter((medicine) =>
      medicine.name.toLowerCase().includes(searchTerm)
    );
    setFilteredMedicines(filtered);
    setShowDropdown(true);
  };

  const handleClick = () => {
    if (filteredMedicines.length === 0) {
      setFilteredMedicines(medicines);
      setShowDropdown(true);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={handleSearchChange}
        onClick={handleClick}
      />
      {showDropdown && (
        <div className="dropdown">
          <ul className="dropdown-list">
            {filteredMedicines.map((medicine) => (
              <li key={medicine.id} className="dropdown-item">
                <Link to={`/medicine/${medicine.id}/${encodeURIComponent(medicine.name)}`}>
                  <div className="dropdown-item-content">
                    {medicine.name}
                    {/* Other content related to the medicine */}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
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
