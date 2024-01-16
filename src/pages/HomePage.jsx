// pages/HomePage.js
import React from 'react';
import './HomePage.css';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import background from '../assets/images/background.png';
import LatestBlogs from '../components/LatestBlogs';
import Extro from '../components/Extro';
import Footer from '../components/Footer';
const HomePage = () => {
  return (
    <div className='contents'>
      <Navbar />
      <img className='backgroundImg' src={background} alt="Background of the Travel Blogging website" />
      <h1 className='title'>Travel Blogging</h1>
      <HeroSection />
      <LatestBlogs/>
     <Extro/>
     <Footer/>
    
    </div>
  );
};

export default HomePage;
