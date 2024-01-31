// BlogPreview.jsx
import React from 'react';
import logo from '../assets/images/blog_logo-modified.png';
import { Link } from 'react-router-dom';

const BlogPreview = ({ id, title, isAuthor }) => {
  return (
    <div className='preview'>
      <img src={logo} alt="" />
      <h3 className='subHeader'>{title}</h3>
      <Link to={`/blog/${id}`}>
        <button className='previewText'>View More</button>
      </Link>
      {isAuthor && (
        <Link to={`/edit/${id}`}>
          <button className='editButton'>Edit</button>
        </Link>
      )}
    </div>
  );
};

export default BlogPreview;
