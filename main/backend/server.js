const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3');
const path = require('path');

const app = express();
const db = new sqlite3.Database(path.join(__dirname, 'users.db'));

app.use(bodyParser.json());

// Serve static files from the frontend folder (not public anymore, it's now frontend)
app.use(express.static(path.join(__dirname, '../frontend'))); // Updated to frontend directory

// Route for user login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.get("SELECT * FROM users WHERE email = ? AND password = ?", [email, password], (err, row) => {
    if (err) {
      return res.status(500).json({ success: false, message: "Database error" });
    }
    if (row) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }
  });
});

// Route for user registration
app.post('/register', (req, res) => {
  const { firstName, lastName, email, password, number } = req.body;
  db.run("INSERT INTO users (firstName, lastName, email, password, number) VALUES (?, ?, ?, ?, ?)",
    [firstName, lastName, email, password, number], function (err) {
      if (err) {
        return res.status(500).json({ success: false, message: "Database error" });
      }
      res.status(200).json({ success: true });
    });
});

// Route for forgot password
app.post('/forgot-password', (req, res) => {
  const { email } = req.body;
  db.get("SELECT * FROM users WHERE email = ?", [email], (err, row) => {
    if (err) {
      return res.status(500).json({ success: false, message: "Database error" });
    }
    if (row) {
      // In a real-world scenario, you'd send a password reset email here.
      return res.status(200).json({ success: true, message: "Password reset link sent." });
    } else {
      return res.status(404).json({ success: false, message: "Email not found." });
    }
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
