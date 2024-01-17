// Navbar.jsx
import React, { useState, useEffect } from 'react';
import logo from '../assets/images/blog_logo-modified.png';

const Navbar = ({ specialPageStyle }) => {
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
    color: specialPageStyle ? 'white' : (scrolling ? '#ffffff' : '#001F3F'),
    background: specialPageStyle ? '#001F3F' : (scrolling ? '#001F3F' : 'transparent'),
    fontSize: 22,
    position: specialPageStyle ? 'relative' : 'fixed', // Set position to fixed for the special page
    width: '100%',
    height: specialPageStyle ?'5%' : '10%',
    listStyleType: 'none',
    zIndex: 1000,
    display: 'flex',
    fontFamily: 'Montserrat',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    transition: '0.3s ease',
    cursor: 'pointer',
  };

  const ulStyle = {
    display: 'flex',
    listStyleType: 'none',
    margin: 10,
    marginRight: 100,
    padding: 0,
  };

  const liStyle = {
    margin: '30px',
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
