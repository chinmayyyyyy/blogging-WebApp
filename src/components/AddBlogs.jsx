import React, { Component } from 'react';
import './addBlogs.css';
import { Link } from 'react-router-dom';

export default class AddBlogs extends Component {
  render() {
    return (
        <div>
      <div className='addBlogContainer'>
            <div className="addBlogText">
                  <h2>Want to add New Blogs ?</h2>
             </div>
             <div className='addButton'>
             <Link to={`write`}>
                    <button>
                         +
                    </button>
            </Link>
            </div>
        <div className='totalInfo'>
                <h3>
                    Total Blogs : 
                </h3>
        </div>
      </div>
      </div>
    )
  }
}
