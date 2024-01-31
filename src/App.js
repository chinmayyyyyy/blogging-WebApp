import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Blog from './pages/Blog';
import Blogs from './pages/Blogs';
import AboutUs from './pages/AboutUs';
import Write from './pages/Write';
import BlogDashboard from './pages/BlogDashboard';
import EditBlog from './components/EditBlog';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/write" element={<Write />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/dashboard" element={<BlogDashboard />} />
        <Route path="/edit/:blogId" element={<EditBlog />} />
      </Routes>
    </Router>
  );
};

export default App;
