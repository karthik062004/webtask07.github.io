app.post('/register', (req, res) => {
    const { firstName, lastName, email, password, number } = req.body;
    
    // Check if the email is already in the database
    db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
      if (err) {
        return res.status(500).json({ success: false, message: "Database error" });
      }
      
      if (row) {
        return res.status(400).json({ success: false, message: "Email already in use." });
      }
  
      // Insert new user into the database
      db.run('INSERT INTO users (firstName, lastName, email, password, number) VALUES (?, ?, ?, ?, ?)', 
        [firstName, lastName, email, password, number], 
        function(err) {
          if (err) {
            return res.status(500).json({ success: false, message: "Failed to create account." });
          }
          res.json({ success: true });
        });
    });
  });
  