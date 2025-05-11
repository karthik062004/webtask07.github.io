// login.js
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    // Check if the email and password match in the database
    db.get('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, row) => {
        if (err) {
            return res.status(500).json({ success: false, message: "Database error" });
        }
        
        if (!row) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }

        res.json({ success: true });
    });
});

// register.js (updated with validation)
app.post('/register', (req, res) => {
    const { firstName, lastName, email, password, number } = req.body;
    
    // Validate phone number
    if (!/^\d{10}$/.test(number)) {
        return res.status(400).json({ success: false, message: "Phone number must be 10 digits" });
    }

    // Validate password length
    if (password.length < 8) {
        return res.status(400).json({ success: false, message: "Password must be at least 8 characters" });
    }

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

// forgotPassword.js
app.post('/forgot-password', (req, res) => {
    const { email } = req.body;
    
    // Check if the email exists in the database
    db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
        if (err) {
            return res.status(500).json({ success: false, message: "Database error" });
        }
        
        if (!row) {
            return res.status(400).json({ success: false, message: "Email not found." });
        }

        // In a real application, you would send a password reset email here
        res.json({ 
            success: true,
            message: "Password reset instructions have been sent to your email."
        });
    });
});