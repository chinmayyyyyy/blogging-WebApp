// components/HeroSection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handelExploreNow = () => {
    navigate('/blogs');
  };

  return (
    <div className="titleHero">
      <p>Explore thousands of stories</p>
      <button onClick={handelExploreNow} >Explore Now</button>
    </div>
  );
};

export default HeroSection;
