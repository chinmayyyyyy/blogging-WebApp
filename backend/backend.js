// backend.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const router = express.Router();

const app = express();
const PORT = process.env.PORT || 5000;

// Import the database configuration
const dbConfig = require('./dbConfig');

// Create a MySQL connection pool
const pool = mysql.createPool(dbConfig);

app.use(cors());
app.use(bodyParser.json());
app.use('/api', router); // Use '/api' as the base path



router.post('/write', (req, res) => {
  const { title, content, imageUrl, userId } = req.body;

  // Construct SQL query
  const sql = 'INSERT INTO posts (title, content, imageUrl, userId, createdAt) VALUES (?, ?, ?, ?, NOW())';

  // Execute the query
  pool.query(sql, [title, content, imageUrl, userId], (err, result) => {
    if (err) {
      console.error('Error creating blog post:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    // Blog post created successfully
    return res.status(201).json({ message: 'Blog post created successfully', postId: result.insertId });
  });
});

router.get('/blog/:id' , (req , res) =>{
    const {id} = req.params ;

    //constructing SQL
    const sql = 'SELECT * FROM posts WHERE id = ?';

    pool.query(sql, [id] , (err , results)=>{
      if(err){
        console.log("Error fetching the blog" , err);
        return res.statusCode(500).json({error : "Internal server error"});
      }
      if (results.length === 0) {
        return res.status(404).json({ error: 'Blog not found' });
      }
  
      const blogData = results[0];
      return res.json(blogData);

    });
});
router.get('/allBlogs', (req, res) => {

    //constructing SQL
    const sql = 'SELECT * FROM posts';

    // Execute the query
    pool.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching blogs:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      return res.json(results);

    });
});
router.get('/allBlogs', (req, res) => {
  // Construct SQL query to fetch all blogs
  const sql = 'SELECT * FROM posts';

  // Execute the query
  pool.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching blogs:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    return res.json(results);
  });
});

module.exports = router;
// Routes and other middleware will go here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
