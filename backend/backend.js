const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise'); // Import MySQL library

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost', // your MySQL host
  user: 'root', // your MySQL user
  password: 'your_password', // your MySQL password
  database: 'your_database', // your MySQL database
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Example route to get all blogs
app.get('/api/blogs', async (req, res) => {
  try {
    // Get a connection from the pool
    const connection = await pool.getConnection();
    
    // Query to get all blogs
    const [rows, fields] = await connection.query('SELECT * FROM blogs');

    // Release the connection back to the pool
    connection.release();

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add more routes for CRUD operations as needed

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
