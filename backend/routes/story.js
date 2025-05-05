const express = require('express');
const Story = require('../models/Story');
const router = express.Router();

// Create a new story
router.post('/', async (req, res) => {
  const { title, content, backgroundVideoUrl, duration } = req.body;

  try {
    const newStory = new Story({ title, content, backgroundVideoUrl, duration });
    await newStory.save();
    res.status(201).json(newStory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all stories
router.get('/', async (req, res) => {
  try {
    const stories = await Story.find();
    res.status(200).json(stories);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
