import React, { useState, useEffect } from 'react';
import '../styles/About.css';

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
      <div class="load"></div>
      <h1>Redirecting to Github Page</h1>
    </>
  );
};

export default About;
