const express = require('express');
const router = express.Router();
const discussions = require('../data/discussions');

router.get('/', (req, res) => {
    res.json(discussions);
});

module.exports = router;
