const express = require('express');
const Reel = require('../models/Reel');
const router = express.Router();

// Create a new reel
router.post('/', async (req, res) => {
  const { storyId, videoUrl, shortDescription } = req.body;

  try {
    const newReel = new Reel({ storyId, videoUrl, shortDescription });
    await newReel.save();
    res.status(201).json(newReel);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all reels
router.get('/', async (req, res) => {
  try {
    const reels = await Reel.find().populate('storyId');
    res.status(200).json(reels);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
