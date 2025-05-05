const express = require('express');
const router = express.Router();
const Podcast = require('../models/Podcast');

// Create a new podcast
router.post('/', async (req, res) => {
  try {
    const newPodcast = new Podcast(req.body);
    const savedPodcast = await newPodcast.save();
    res.status(201).json(savedPodcast);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all podcasts
router.get('/', async (req, res) => {
  try {
    const podcasts = await Podcast.find();
    res.json(podcasts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
