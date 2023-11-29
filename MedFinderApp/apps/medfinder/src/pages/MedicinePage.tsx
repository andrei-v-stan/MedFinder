import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/Topbar.css';
import '../styles/Medicinepage.css';

function Topbar() {
  return (
    <>
    <div className="topbar">
      <Link to="/">
        <button className="logo-MF-button">
          <img src="../../src/assets/topbar/TopbarMFLogo.png" alt="Logo Button" />
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


const MedicinePage: React.FC = () => {
  const { id, name } = useParams<{ id: string; name: string }>();

  const [medicineData, setMedicineData] = useState<any | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/medicines/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMedicineData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!medicineData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Topbar />
      <div className="medicine-details">
      <h1>{medicineData.name}</h1>
      <div className="details">
        <p><strong>ID:</strong> {medicineData.id}</p>
        <p><strong>Description:</strong> {medicineData.description}</p>
        <p><strong>Manufacturer:</strong> {medicineData.manufacturer}</p>
        {/* Include other details as needed */}
      </div>
    </div>
    </div>
  );
};

export default MedicinePage;
