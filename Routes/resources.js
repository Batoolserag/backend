const express = require('express');
const router = express.Router();
const resources = require('../data/resources');

router.get('/', (req, res) => {
    res.json(resources);
});

module.exports = router;
