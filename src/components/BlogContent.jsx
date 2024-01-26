import React, { useEffect, useState } from 'react';
import './blogContent.css';

const BlogContent = ({ id }) => {
  const [blogData, setBlogData] = useState({});
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const fetchBlogDataWithImage = async () => {
      try {
        // Replace 'http://localhost:5000' with the actual base URL of your backend server
        const response = await fetch(`http://localhost:5000/api/blogWithImage/${id}`);
        const data = await response.json();
        setBlogData(data);

        // Assuming 'image' column contains the blob data
        const blob = new Blob([data.image], { type: 'image/jpeg' });
        const imageUrl = URL.createObjectURL(blob);
        setImageSrc(imageUrl);
      } catch (error) {
        console.error('Error fetching blog data with image:', error);
      }
    };

    fetchBlogDataWithImage();
  }, [id]); // The dependency array ensures that this effect runs whenever the 'id' prop changes

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
