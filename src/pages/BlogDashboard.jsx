import React, { Component } from 'react'
import './BlogDashboard.css'
export default class BlogDashboard extends Component {
  render() {
    const fetchAllBlogs = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/allBlogs');
          setBlogs(response.data);
        } catch (error) {
          console.error('Error fetching blogs:', error);
        }
      };
    



    return (
      <div className='dashboard-container'>
        <h1>Hello , Master !..</h1>
        <div className='displayBlogs'>            
            <h4>Edit Blogs</h4>
            <BlogList blogs={blogs} onEditClick={handleCreateMode} />
        </div>



      </div>
    )
  }
}
