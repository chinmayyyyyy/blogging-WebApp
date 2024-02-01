import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams
import './editBlog.css';
const EditBlog = () => {
  const { blogId } = useParams(); // Use useParams to get the parameters from the URL

  const [blogData, setBlogData] = useState({
    title: '',
    content: '',
  });

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blog/${blogId}`);
        setBlogData(response.data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchBlogData();
  }, [blogId]);

  const handleUpdateBlog = async () => {
    try {
      await axios.put(`http://localhost:5000/api/edit/${blogId}`, {
        title: blogData.title,
        content: blogData.content,
      });

      // Add logic for success message or redirection
      console.log('Blog updated successfully');
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };

  return (
    <div className='editContainer'>
      <h2>Edit Blog</h2>
      <label>Title:</label>
      <input type="text" name="title" value={blogData.title} onChange={handleInputChange} />
      <label>Content:</label>
      <textarea name="content" value={blogData.content} onChange={handleInputChange}></textarea>
      <button onClick={handleUpdateBlog}>Update Blog</button>
    </div>
  );
};

export default EditBlog;
