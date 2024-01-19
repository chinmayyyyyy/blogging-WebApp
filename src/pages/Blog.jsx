// Blog.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import './blog.css';
import BlogContent from '../components/BlogContent';
import Footer from '../components/Footer';
import Extro from '../components/Extro';
import { useParams } from 'react-router-dom'; // Import useParams hook

const Blog = () => {
  const isSpecialPage = true; // Set this based on the current page or some condition

  // Example data for BlogContent
  const blogData1 = {
    id: 1,
    imageUrl: 'path/to/image1.jpg',
    title: 'PUNE',
    content: 'Your blog content goes here...',
  };

  // Extract blog ID from the URL using useParams
  const { id } = useParams();

  // Fetch blog data based on the ID from your backend or data source
  // Replace this with your actual data fetching logic
  // For now, using a hardcoded blogData as an example
  const blogData = id === '1' ? blogData1 : null;

  return (
    <div className='blog'>
      {isSpecialPage ? (
        <Navbar specialPageStyle />
      ) : (
        <Navbar />
      )}
      <div>
        {blogData ? (
          <BlogContent {...blogData} />
        ) : (
          <p>Blog not found</p>
        )}
      </div>
      <div>
        <Extro />
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
