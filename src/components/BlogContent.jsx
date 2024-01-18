// BlogContent.jsx
import React, { Component } from 'react';
import './blogContent.css'; // Link to your BlogContent-specific styles

class BlogContent extends Component {
  render() {
    const { imageUrl, title, content } = this.props;

    return (
      <div className='blogContentContainer'>
        <img className='posterImg' src={imageUrl} alt="" />
        <div className='blogContentParagraph'>
          <h1 className='blogTitle'>{title}</h1>
          <p>{content}</p>
        </div>
      </div>
    );
  }
}

export default BlogContent;
