// Footer.jsx
import React, { Component } from 'react';
import logo from '../assets/images/blog_logo-modified.png';
import './footer.css'; // Link to your Footer-specific styles

export default class Footer extends Component {
  render() {
    return (
      <nav className='footer-navbar'>
        <div>
          <img className='logo' src={logo} alt="" />
        </div>
        <h4>
          Travel Blogging
        </h4>
      </nav>
    );
  }
}
