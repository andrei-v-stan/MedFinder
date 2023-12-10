import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import Cookies from 'js-cookie';

import Topbar from './Topbar';
import '../styles/Topbar.css';
import '../styles/Medicinepage.css';

const MedicinePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [medicineData, setMedicineData] = useState<any | null>(null);
  const floatingBarRef = useRef<HTMLDivElement>(null);
  const medicineDetailsRef = useRef<HTMLDivElement>(null);

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

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (floatingBarRef.current && medicineDetailsRef.current) {
      const topbarHeight = document.querySelector('.topbar')?.clientHeight || 0;
      const rect = medicineDetailsRef.current.getBoundingClientRect();
      const isFloating = rect.bottom <= topbarHeight;
      if (isFloating) {
        floatingBarRef.current.classList.add('floating');
      } else {
        floatingBarRef.current.classList.remove('floating');
      }
    }
  };  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!medicineData) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <Topbar isMedicinePage />

      <div className="medicine-wrapper">
        <section ref={medicineDetailsRef} className="details">
          <h1>{medicineData.name}</h1>
          <p><strong>ID:</strong> {medicineData.id}</p>
          <p><strong>Description:</strong> {medicineData.description}</p>
          <p><strong>Manufacturer:</strong> {medicineData.manufacturer}</p>
        </section>

        <div className="floating-bar" ref={floatingBarRef}>
          <a href="#usage">Usage</a>
          <a href="#sideEffects">Side Effects</a>
          <a href="#precautions">Precautions</a>
          <a href="#interactions">Interactions</a>
          <a href="#symptomScale">Symptom Scale</a>
          <a href="#reviews">Reviews</a>
        </div>
      </div>

      <section id="usage">
        <h1>Usage</h1>
        <p><strong>Description:</strong> {medicineData.description}</p>
      </section>
      <section id="sideEffects">
        <h1>Side Effects</h1>
        <p><strong>Description:</strong> {medicineData.description}</p>
      </section>
      <section id="precautions">
        <h1>Precautions</h1>
        <p><strong>Description:</strong> {medicineData.description}</p>
      </section>
      <section id="interactions">
        <h1>Interactions</h1>
        <p><strong>Description:</strong> {medicineData.description}</p>
      </section>
      <section id="symptomScale">
        <h1>Symptom Scale</h1>
        <p><strong>Description:</strong> {medicineData.description}</p>
      </section>
      <section id="reviews">
        <h1>Reviews</h1>
        <p><strong>Description:</strong> {medicineData.description}</p>
      </section>
    </>
  );
};

export default MedicinePage;
