import React, { useState, useEffect } from 'react';

const Home: React.FC = () => {
  const [medicines, setMedicine] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/medicines');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setMedicine(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetch('/api')
      .then((res) => res.text())
      .then(setGreeting);
  }, []);

  return (
    <>
      <h1>Hello</h1>
      <div>
        {medicines.map((medicine) => (
          <div key={medicine.id}>
            <p>ID: {medicine.id}</p>
            <p>Name: {medicine.name}</p>
            <p>Description: {medicine.description}</p>
            <p>Manufacturer: {medicine.manufacturer}</p>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
