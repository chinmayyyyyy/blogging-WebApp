import React, { Component } from 'react'
import logo from '../assets/images/blog_logo-modified.png';

export default class BlogPreview extends Component {
  render() {
    return (
      <div className='preview'>
        <img src={logo} alt="" />
        <h3 className='subHeader'>Lorem, ipsum dolor.</h3>
        {/* <p className='previewText'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p> */}
      <button className='previewText'>View More</button>
      </div>
      
    )
  }
}
