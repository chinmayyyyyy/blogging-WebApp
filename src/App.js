// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Blog from './pages/Blog';
import Blogs from './pages/Blogs';
import AboutUs from './pages/AboutUs';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
