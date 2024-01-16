import React, { useState, useEffect } from 'react';
import logo from '../assets/images/blog_logo-modified.png';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    color: scrolling ? '#ffffff' : '#001F3F', // Change text color based on scroll
    background: scrolling ? '#001F3F' : 'transparent', // Change background based on scroll
    fontSize: 22,
    position: 'fixed',
    width: '100%',
    height : '10%',
    listStyleType: 'none',
    zIndex: 1000, // Ensure the navbar is above other elements
    display: 'flex',
    fontFamily: 'Montserrat',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px', // Adjust padding as needed
    transition: '0.3s ease', // Add transition for a smooth effect
  };

  const ulStyle = {
    display: 'flex',
    listStyleType: 'none',
    margin: 10,
    marginRight: 100,
    padding: 0,
  };

  const liStyle = {
    margin: '30px', // Adjust margin as needed
  };

  return (
    <nav style={navbarStyle}>
      <div>
        <img className='logo' src={logo} alt="" />
      </div>
      <ul style={ulStyle}>
        <li style={liStyle}>Home</li>
        <li style={liStyle}>Blogs</li>
        <li style={liStyle}>About Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
