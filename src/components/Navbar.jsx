// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    color: specialPageStyle ? 'white' : scrolling ? '#ffffff' : '#001F3F',
    background: specialPageStyle ? '#001F3F' : scrolling ? '#001F3F' : 'transparent',
    fontSize: 22,
    position: specialPageStyle ? 'relative' : 'fixed', // Set position to fixed for the special page
    width: specialPageStyle ? '98%' : '100%', // Adjust width based on special page
    height: specialPageStyle ? '1%' : '10%', // Adjust height based on special page
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
        <Link to="/" className="custom-link">
          <img className='logo' src={logo} alt="" />
        </Link>
      </div>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to="/" className="custom-link">
            Home
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/blogs" className="custom-link">
            Blogs
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/aboutUs" className="custom-link">
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;