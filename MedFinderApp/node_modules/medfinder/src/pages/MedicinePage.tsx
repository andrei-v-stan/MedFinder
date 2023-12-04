import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Cookies from 'js-cookie';

import Topbar from './Topbar';
import '../styles/Topbar.css';
import '../styles/Medicinepage.css';


const MedicinePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
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
      <Topbar isMedicinePage />
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
