// pages/HomePage.js
import React from 'react';
import './HomePage.css';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import background from '../assets/images/background.png';
import LatestBlogs from '../components/LatestBlogs';
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <img className='backgroundImg' src={background} alt="Background of the Travel Blogging website" />
      <h1 className='title'>Travel Blogging</h1>
      <HeroSection />
      <LatestBlogs/>
    </div>
  );
};

export default HomePage;
