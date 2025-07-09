const express = require('express');
const router = express.Router();
const topics = require('../data/topics');

router.get('/', (req, res) => {
    res.json(topics);
});

module.exports = router;
