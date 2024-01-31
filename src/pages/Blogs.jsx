// Blogs.js
import React, { useState, useEffect } from 'react';
import './blogs.css';
import Navbar from '../components/Navbar';
import BlogList from '../components/BlogList'; // Import the new BlogList component
import Footer from '../components/Footer';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/allBlogs');
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }

        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

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
        {loading ? (
          <p>Loading...</p>
        ) : (
          <BlogList blogs={blogs} />
        )}
      </div>
      <div className='footer'>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Blogs;
