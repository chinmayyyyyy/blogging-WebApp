import React, { Component } from 'react'
import BlogPreview from './BlogPreview'
import '../components/LatestBlogs.css'
export default class LatestBlogs extends Component {
  render() {
    return (
      <div className='latestBlog'>
        <div className='titleText'>Latest Blogs</div>
        <div className='blogPreview'>
          <BlogPreview/>
          <BlogPreview/>
          <BlogPreview/>
        </div>
      </div>
    )
  }
}
