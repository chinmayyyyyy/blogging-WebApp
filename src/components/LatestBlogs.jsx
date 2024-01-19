// LatestBlogs.js or where you render BlogPreview components
import React from 'react';
import '../components/LatestBlogs.css';
import BlogPreview from './BlogPreview';

const LatestBlogs = ({ blogs }) => {
  return (
    <div className='latestBlog'>
      <div className='titleText'>Latest Blogs</div>
      <div className='blogPreview'>
        {blogs.map(blog => (
          <BlogPreview key={blog.id} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;

