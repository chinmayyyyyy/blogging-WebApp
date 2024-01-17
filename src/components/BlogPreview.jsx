import React from 'react';
import logo from '../assets/images/blog_logo-modified.png';
import { useNavigate } from 'react-router-dom';

const BlogPreview = () => {
  const navigate = useNavigate();

  const handleViewMoreClick = () => {
    navigate('/blog');
  };

  return (
    <div className='preview'>
      <img src={logo} alt="" />
      <h3 className='subHeader'>Lorem, ipsum dolor.</h3>
      <button className='previewText' onClick={handleViewMoreClick}>View More</button>
    </div>
  );
};

export default BlogPreview;
