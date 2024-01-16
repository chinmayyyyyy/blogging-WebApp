import React from 'react';
import logo from '../assets/images/blog_logo-modified.png';
import { useHistory } from "react-router-dom";

const BlogPreview = () => {
  const history = useHistory();

  const handleViewMoreClick = () => {
    history.push('/blog');
  };

  return (
    <div className='preview'>
      <img src={logo} alt="" />
      <h3 className='subHeader'>Lorem, ipsum dolor.</h3>
      {/* <p className='previewText'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p> */}
      <button className='previewText' onClick={handleViewMoreClick}>View More</button>
    </div>
  );
};

export default BlogPreview;
