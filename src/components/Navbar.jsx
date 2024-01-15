// components/Navbar.js
import React from 'react';
import logo from '../assets/images/blog_logo-modified.png';

const navbarStyle = {
  color: '#001F3F',
  fontSize: 22,
  position: 'fixed',
  width: '100%',
  listStyleType: 'none',
  zIndex: 1000, // Ensure the navbar is above other elements
  display: 'flex',
  fontFamily: 'Montserrat',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px', // Adjust padding as needed
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

function Navbar() {
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
}

export default Navbar;
