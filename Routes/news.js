// routes/news.js
const express = require('express');
const router = express.Router();
const news = require('../data/news');

router.get('/', (req, res) => {
    res.json(news);
});

module.exports = router;
