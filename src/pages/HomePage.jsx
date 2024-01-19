// HomePage.js
import React from 'react';
import './HomePage.css';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import background from '../assets/images/background.png';
import LatestBlogs from '../components/LatestBlogs';
import Extro from '../components/Extro';
import Footer from '../components/Footer';

const HomePage = () => {
  // Mock data for blogs
  const blogDataArray = [
    {
      id: 1,
      imageUrl: 'path/to/image1.jpg',
      title: 'PUNE',
      // ... other data for Blog Post 1
    },
    {
      id: 2,
      imageUrl: 'path/to/image2.jpg',
      title: 'Blog Post 2',
      // ... other data for Blog Post 2
    },
    {
      id: 3,
      imageUrl: 'path/to/image2.jpg',
      title: 'Blog Post 2',
      // ... other data for Blog Post 2
    },
 
  ];

  return (
    <div className='contents'>
      <Navbar />
      <img className='backgroundImg' src={background} alt="Background of the Travel Blogging website" />
      <h1 className='title'>Travel Blogging</h1>
      <HeroSection />
      <LatestBlogs blogs={blogDataArray} />
      <Extro />
      <Footer />
    </div>
  );
};

export default HomePage;
