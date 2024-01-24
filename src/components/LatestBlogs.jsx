// LatestBlogs.js

import React from 'react';
import '../components/LatestBlogs.css';
import BlogPreview from './BlogPreview';

const LatestBlogs = ({ blogs, loading }) => {
  // Assuming blogs are sorted by ascending IDs
  const topThreeBlogs = blogs.slice(-3);

  return (
    <div className='latestBlog'>
      <div className='titleText'>Latest Blogs</div>
      <div className='blogPreview'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          topThreeBlogs.map(blog => (
            <BlogPreview key={blog.id} {...blog} />
          ))
        )}
      </div>
    </div>
  );
};

export default LatestBlogs;
