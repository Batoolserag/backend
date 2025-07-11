const express = require('express');
const router = express.Router();
const users = require('../data/users');

// Register a new user
router.post('/register', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
        return res.status(409).json({ message: 'Username already exists.' });
    }

    const newUser = {
        id: users.length + 1,
        username,
        password // NOTE: In real apps, hash passwords!
    };

    users.push(newUser);
    res.status(201).json({ message: 'User registered successfully!' });
});

// Login user
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password.' });
    }

    res.json({ message: 'Login successful!', userId: user.id, username: user.username });
});

module.exports = router;
