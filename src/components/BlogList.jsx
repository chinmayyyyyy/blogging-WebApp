// BlogList.js
import React from 'react';
import './blogList.css'; // Import the CSS file
import BlogPreview from './BlogPreview';

const BlogList = ({ blogs, isAuthor }) => {
  return (
    <div className='blog-list'>
      {blogs.map(blog => (
        <BlogPreview key={blog.id} {...blog} isAuthor={isAuthor} />
      ))}
    </div>
  );
};

export default BlogList;
