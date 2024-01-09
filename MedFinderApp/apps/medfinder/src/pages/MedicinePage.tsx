import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import Topbar from './Topbar';
import MedicinePageStyle from '../styles/MedicinePage.module.css';
import ReviewList from '../components/Review/ReviewList';
import ReviewData from '../data/ReviewData';
import ReviewStats from '../components/Review/ReviewStats';
import ReviewForm from '../components/Review/ReviewForm';
import { v4 as uuidv4 } from 'uuid';

const MedicinePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [medicineData, setMedicineData] = useState<any | null>(null);
  const floatingBarRef = useRef<HTMLDivElement>(null);
  const medicineDetailsRef = useRef<HTMLDivElement>(null);
  const [review, setReview] = useState(ReviewData);
  const addReview = newReview => {
    newReview.id = uuidv4();
    setReview([newReview, ...review]);
  };
  const deleteFeedback = id => {
    if (window.confirm('Are you sure you want to delete?')) {
      setReview(review.filter(item => item.id !== id));
    }
  }

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
      const topbarHeight = document.querySelector('.topbar')?.clientHeight || document.querySelector('._topbar_awuy2_1')?.clientHeight || 75;
      const rect = medicineDetailsRef.current.getBoundingClientRect();
      const isFloating = rect.bottom <= topbarHeight;
      if (isFloating) {
        floatingBarRef.current.classList.add(MedicinePageStyle.floating);
      } else {
        floatingBarRef.current.classList.remove(MedicinePageStyle.floating);
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

      <div className={MedicinePageStyle.medicineWrapper}>
        <section ref={medicineDetailsRef} className={MedicinePageStyle.details}>
          <h1>{medicineData.name}</h1>
          <p><strong>ID:</strong> {medicineData.id}</p>
          <p><strong>Description:</strong> {medicineData.description}</p>
          <p><strong>Manufacturer:</strong> {medicineData.manufacturer}</p>
        </section>

        <div className={MedicinePageStyle.floatingBar} ref={floatingBarRef}>
          <button onClick={() => scrollToSection("usage")} className={MedicinePageStyle.textButton}>Usage</button>
          <button onClick={() => scrollToSection("sideEffects")} className={MedicinePageStyle.textButton}>Side Effects</button>
          <button onClick={() => scrollToSection("precautions")} className={MedicinePageStyle.textButton}>Precautions</button>
          <button onClick={() => scrollToSection("interactions")} className={MedicinePageStyle.textButton}>Interactions</button>
          <button onClick={() => scrollToSection("symptomScale")} className={MedicinePageStyle.textButton}>Symptom Scale</button>
          <button onClick={() => scrollToSection("reviews")} className={MedicinePageStyle.textButton}>Reviews</button>
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
        <div className="container">
          <ReviewForm handleAdd={addReview} />
          <ReviewStats review={review} />
          <ReviewList review={review} handleDelete={deleteFeedback} />
        </div>
      </section>
    </>
  );
};

export default MedicinePage;
