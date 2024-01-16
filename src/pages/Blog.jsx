// components/BlogPreview.jsx
import React from 'react';
import { useHistory } from 'react-router-dom';
const Blog = () => {
  const history = useHistory();

  const handleViewMoreClick = () => {
    history.push('/blog'); // Replace with your target route
  };

  return (
    <div className='preview'>
      {/* ... rest of your component */}
      <button className='previewText' onClick={handleViewMoreClick}>View More</button>
    </div>
  );
};

export default Blog;
