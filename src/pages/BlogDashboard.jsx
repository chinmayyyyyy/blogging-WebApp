// BlogDashboard.js
import React, { Component } from 'react';
import axios from 'axios';
import './BlogDashboard.css';
import BlogList from '../components/BlogList';
import AddBlogs from '../components/AddBlogs';

class BlogDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      loading: true,
    };
  }

  async componentDidMount() {
    await this.fetchAllBlogs();
  }

  fetchAllBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/allBlogs');
      this.setState({ blogs: response.data, loading: false });
    } catch (error) {
      console.error('Error fetching blogs:', error);
      this.setState({ loading: false });
    }
  };

  render() {
    const { blogs, loading } = this.state;
    const isUserAuthor = true;

    return (
      <div className='dashboard-container'>
        <h1>Hello, Master !..</h1>
        <div className="addBlogs">
        <AddBlogs/>
        </div>
        <div className='displayBlogs'>
          <h4>Edit Blogs</h4>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <BlogList blogs={blogs} isAuthor={isUserAuthor} />
          )}
        </div>
      </div>
    );
  }
}

export default BlogDashboard;
