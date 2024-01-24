import React, { useState } from 'react';
import './write.css';
import Navbar from '../components/Navbar';

const Write = () => {
  const isSpecialPage= true ; 
  // State for form data and success message
  const [blogData, setBlogData] = useState({
    title: '',
    content: '',
    imageUrl: '',
    userId: 1, // Replace with actual user ID once you have user authentication
  });
  const [successMessage, setSuccessMessage] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Mock API endpoint for demonstration
    fetch('http://localhost:5000/api/write', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blogData),
    })
      .then((response) => response.json())
      .then((data) => {
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
      .catch((error) => {
        console.error('Error creating blog post:', error);
        // Handle error or display an error message to the user
      });
  };
  return (
    <div>
     {isSpecialPage ? <Navbar specialPageStyle /> : <Navbar />}
      
    <div className='write-container'>

      {/* Blog Form section */}
      <div className='blog-form'>
        <form onSubmit={handleFormSubmit}>
          {/* Title Input */}
          <input
            type='text'
            name='title'
            className='blog-input'
            placeholder='Write title here...'
            value={blogData.title}
            onChange={handleInputChange}
          />

          {/* Content Textarea */}
          <textarea
            name='content'
            className='blog-textarea'
            placeholder='Write the blog'
            value={blogData.content}
            onChange={handleInputChange}
            cols='30'
            rows='10'
          ></textarea>

          {/* Image URL Input */}
          <input
            type='text'
            name='imageUrl'
            className='blog-input'
            placeholder='Image URL'
            value={blogData.imageUrl}
            onChange={handleInputChange}
          />

          {/* Submit Button */}
          <button type='submit' className='blog-button'>
            Post the blog
          </button>
        </form>

        {/* Success Message */}
        {successMessage && <p className='success-message'>{successMessage}</p>}
      </div>
    </div>
    </div>

  );
};

export default Write;
