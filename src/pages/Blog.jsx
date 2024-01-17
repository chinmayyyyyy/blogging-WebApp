// Blog.jsx
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import './blog.css';
import BlogContent from '../components/BlogContent';
import Footer from '../components/Footer';


export default class Blog extends Component {
  render() {
    const isSpecialPage = true; // Set this based on the current page or some condition

    return (
      <div className='blog'>
        {isSpecialPage ? (
          <Navbar specialPageStyle />
        ) : (
          <Navbar />
        )}
        <div>
        <BlogContent />
        </div>
        <Footer/>

      </div>
    );
  }
}
