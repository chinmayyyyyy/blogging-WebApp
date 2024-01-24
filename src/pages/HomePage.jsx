// HomePage.js

import React, { useState, useEffect } from 'react';
import './HomePage.css';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import background from '../assets/images/background.png';
import LatestBlogs from '../components/LatestBlogs';
import Extro from '../components/Extro';
import Footer from '../components/Footer';

const HomePage = () => {
  const [blogDataArray, setBlogDataArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/allBlogs');
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }

        const data = await response.json();
        setBlogDataArray(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className='contents'>
      <Navbar />
      <img className='backgroundImg' src={background} alt="Background of the Travel Blogging website" />
      <h1 className='title'>Travel Blogging</h1>
      <HeroSection />
      <LatestBlogs blogs={blogDataArray} loading={loading} />
      <Extro />
      <Footer />
    </div>
  );
};

export default HomePage;
