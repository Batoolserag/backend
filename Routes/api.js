// routes/api.js
const express = require('express');
const router = express.Router();

const topics = require('../data/topics');
const news = require('../data/news');
const discussions = require('../data/discussions');
const activities = require('../data/activities');
const resources = require('../data/resources');

// GET all topics
router.get('/topics', (req, res) => {
  res.json(topics);
});

// GET all news
router.get('/news', (req, res) => {
  res.json(news);
});

// GET all discussions
router.get('/discussions', (req, res) => {
  res.json(discussions);
});

// GET all activities
router.get('/activities', (req, res) => {
  res.json(activities);
});

// GET all resources
router.get('/resources', (req, res) => {
  res.json(resources);
});

module.exports = router;
