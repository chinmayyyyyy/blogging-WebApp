import React, { useState } from 'react';
import './write.css';

const Write = () => {
  const [blogData, setBlogData] = useState({
    title: '',
    content: '',
    imageUrl: '',
    userId: 1, // Replace with actual user ID once you have user authentication
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/api/write', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blogData),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setSuccessMessage('Blog posted successfully!');
        // Reset form data after successful submission if needed
        setBlogData({
          title: '',
          content: '',
          imageUrl: '',
          userId: 1,
        });
      })
      .catch(error => {
        console.error('Error creating blog post:', error);
        // Handle error or display an error message to the user
      });
  };

  return (
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
            type='text'
            name='imageUrl'
            className='blog-input'
            placeholder='Image URL'
            value={blogData.imageUrl}
            onChange={handleInputChange}
          />
          <button type='submit' className='blog-button'>
            Post the blog
          </button>
        </form>

        {successMessage && <p className='success-message'>{successMessage}</p>}
      </div>
    </div>
  );
};

export default Write;
