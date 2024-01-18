import React, { Component } from 'react';
import './blogs.css';
import Navbar from '../components/Navbar';
import BlogPreview from '../components/BlogPreview';
import Footer from '../components/Footer';

export default class Blogs extends Component {
  render() {
    const isSpecialPage = true;
    return (
      <div className="blogs-page">
        <div>
          {isSpecialPage ? (
            <Navbar specialPageStyle />
          ) : (
            <Navbar />
          )}
        </div>
        <hr />
        <div className='blogHolder'>
          <BlogPreview />
          <BlogPreview />
          <BlogPreview />
          <BlogPreview />
          <BlogPreview />
          <BlogPreview />
          <BlogPreview />
          <BlogPreview />
          <BlogPreview />
        </div>
        <div className='footer'>
            <footer>
            <Footer/>
            </footer>
        </div>
      </div>
    );
  }
}
