import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './blog.css';
import BlogContent from '../components/BlogContent';
import Footer from '../components/Footer';
import Extro from '../components/Extro';
import { useParams } from 'react-router-dom';

const Blog = () => {
  const isSpecialPage = true;
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/blog/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch blog data');
        }

        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [id]);

  return (
    <div className='blog'>
      {isSpecialPage ? <Navbar specialPageStyle /> : <Navbar />}
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : blogData ? (
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
