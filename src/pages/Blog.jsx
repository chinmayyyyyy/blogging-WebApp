// Blog.jsx
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import './blog.css';
import BlogContent from '../components/BlogContent';
import Footer from '../components/Footer';
import Extro from '../components/Extro';

export default class Blog extends Component {
  render() {
    const isSpecialPage = true; // Set this based on the current page or some condition

    // Example data for BlogContent
    const blogData1 = {
      imageUrl: 'path/to/image1.jpg',
      title: 'Blog Post 1',
      content: '          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, debitis. Pariatur modi distinctio est rem nisi autem optio quod, a eligendi tempora fugit vel praesentium voluptatem velit, voluptate laudantium assumenda magni! Omnis veritatis et velit modi! Nostrum amet ipsum cupiditate repellat perspiciatis debitis libero odit itaque, harum sapiente iste, ab recusandae odio excepturi exercitationem omnis dolorum! Consequuntur quidem, architecto aliquam modi culpa quisquam illo quos numquam suscipit! Dolore eligendi ad hic accusamus beatae. Aut quos dolore culpa, eos a quisquam reprehenderit molestiae quia minus labore excepturi cum deserunt deleniti enim maiores quas nihil voluptatem laborum, animi sit adipisci veniam provident?',
    };

    return (
      <div className='blog'>
        {isSpecialPage ? (
          <Navbar specialPageStyle />
        ) : (
          <Navbar />
        )}
        <div>
          <BlogContent {...blogData1} />
        </div>
        <div>
          <Extro/>
        </div>
        <Footer/>
      </div>
    );
  }
}
