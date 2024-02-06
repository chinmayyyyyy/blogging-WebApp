import React, { useState } from 'react';
import './write.css';
import Navbar from '../components/Navbar';

const Write = () => {
  const isSpecialPage = true;
  const [blogData, setBlogData] = useState({
    title: '',
    content: '',
    imageFile: null,
  });
  const [successMessage, setSuccessMessage] = useState('');
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setBlogData({ ...blogData, imageFile: file });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', blogData.title);
    formData.append('content', blogData.content);
    formData.append('image', blogData.imageFile);

    fetch('http://localhost:5000/api/write', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSuccessMessage('Blog posted successfully!');
        setBlogData({
          title: '',
          content: '',
          imageFile: null,
        });
      })
      .catch((error) => {
        console.error('Error creating blog post:', error);
      });
  };

  return (
    <div>
      {isSpecialPage ? <Navbar specialPageStyle /> : <Navbar />}

      <div className='write-container'>
        <div className='blog-form'>
          <form onSubmit={handleFormSubmit}>
            <input
              type='text'
              name='title'
              className='blog-input'
              placeholder='Write title here...'
              value={blogData.title}
              onChange={handleInputChange}
            />

            <textarea
              name='content'
              className='blog-textarea'
              placeholder='Write the blog'
              value={blogData.content}
              onChange={handleInputChange}
              cols='30'
              rows='10'
            ></textarea>

            <input
              type='file'
              name='image'
              className='blog-input'
              onChange={handleImageChange}
            />

            <button type='submit' className='blog-button'>
              Post the blog
            </button>
          </form>

          {successMessage && <p className='success-message'>{successMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Write;
