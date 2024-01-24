import React from 'react';
import './blogContent.css';

const BlogContent = ({ imageUrl, title, content }) => {
  return (
    <div className='blogContentContainer'>
      <img className='posterImg' src={imageUrl} alt="" />
      <div className='blogContentParagraph'>
        <h1 className='blogTitle'>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );  
};

export default BlogContent;
