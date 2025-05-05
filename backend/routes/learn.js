const express = require('express');
const TopicProgress = require('../models/TopicProgress');
const router = express.Router();

// Track topic progress for a user
router.post('/progress', async (req, res) => {
  const { userId, topic, language, attempts, correct, lastReviewed, needsRepetition } = req.body;

  try {
    const newProgress = new TopicProgress({ userId, topic, language, attempts, correct, lastReviewed, needsRepetition });
    await newProgress.save();
    res.status(201).json(newProgress);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all progress for a user
router.get('/progress/:userId', async (req, res) => {
  try {
    const progress = await TopicProgress.find({ userId: req.params.userId });
    res.status(200).json(progress);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
