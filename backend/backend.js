// backend.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const router = express.Router();
const multer = require('multer');
const app = express();
const PORT = process.env.PORT || 5000;

// Import the database configuration
const dbConfig = require('./dbConfig');

// Create a MySQL connection pool
const pool = mysql.createPool(dbConfig);

app.use(cors());
app.use(bodyParser.json());
app.use('/api', router); // Use '/api' as the base path
app.use('/uploads', express.static('uploads')); // Serve uploaded files statically

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/write', upload.single('image'), (req, res) => {
  const { title, content } = req.body;
  const imageBuffer = req.file ? req.file.buffer : null;

  const sql = 'INSERT INTO posts (title, content, image) VALUES (?, ?, ?)';

  pool.query(sql, [title, content, imageBuffer], (err, result) => {
    if (err) {
      console.error('Error creating blog post:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    return res.status(201).json({ message: 'Blog post created successfully', postId: result.insertId });
  });
});
router.get('/blog/:id', (req, res) => {
  const { id } = req.params;

  // Construct SQL query to fetch blog post data along with the image based on ID
  const sql = 'SELECT id, title, content, image FROM posts WHERE id = ?';

  // Execute the query
  pool.query(sql, [id], (err, results) => {
    if (err) {
      console.error('Error fetching blog post data with image:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    const blogData = results[0];
    res.json(blogData);
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


module.exports = router;
// Routes and other middleware will go here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
