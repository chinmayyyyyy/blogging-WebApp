import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './blogContent.css';

const BlogContent = ({ id }) => {
  const [blogData, setBlogData] = useState({});
  const [imageSrc, setImageSrc] = useState('');

  // Function to convert array buffer to base64
  const arrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };

  const fetchBlogDataWithImage = async () => {
    try {
      // Replace 'http://localhost:5000' with the actual base URL of your backend server
      const blogUrl = `http://localhost:5000/api/blog/${id}`;
      const imageUrl = `http://localhost:5000/api/getImage/${id}`;

      // Fetch blog post data
      const blogResponse = await axios.get(blogUrl);
      setBlogData(blogResponse.data);

      // Fetch image data
      const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
      const imageArrayBuffer = imageResponse.data;

      // Convert array buffer to base64
      const imageBase64 = arrayBufferToBase64(imageArrayBuffer);
      const imageDataUrl = `data:image/jpeg;base64,${imageBase64}`;
      setImageSrc(imageDataUrl);
    } catch (error) {
      console.error('Error fetching blog data with image:', error);
    }
  };

  useEffect(() => {
    fetchBlogDataWithImage();
  }, [id]);

  return (
    <div className='blogContentContainer'>
      <img className='posterImg' src={imageSrc} alt="" />
      <div className='blogContentParagraph'>
        <h1 className='blogTitle'>{blogData.title}</h1>
        <p>{blogData.content}</p>
      </div>
    </div>
  );
};

export default BlogContent;
