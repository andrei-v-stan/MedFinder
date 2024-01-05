import React, { useState, useEffect } from 'react';
import AboutStyle from '../styles/About.module.css';

const About: React.FC = () => {
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirecting(true);
      window.location.href = 'https://github.com/andrei-v-stan/MedFinder';
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={AboutStyle.load}></div>
      <h1 className={AboutStyle.heading}>Redirecting to Github Page</h1>
    </>
  );
};

export default About;