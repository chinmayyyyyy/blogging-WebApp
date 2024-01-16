import React, { Component } from 'react'
import logo from '../assets/images/blog_logo-modified.png';
const navbarStyle = {
    backgroundColor : '#48CAE4',
    color: '#001F3F',
    fontSize: 22,
    height: '10%',
    width: '98.4%',
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
    marginRight: 20,
    padding: 0,
  };
  
 
export default class Footer extends Component {
  render() {
    return (
        <nav style={navbarStyle}>
        <div >
        <img className='logo' src={logo} alt="" />
        </div>
        <h4 style={ulStyle}>
            Travel Blogging
        </h4>
      </nav>
    )
  }
}
