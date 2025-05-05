const express = require('express');
const Summary = require('../models/Summary');
const router = express.Router();

// Summarize a document or video
router.post('/summarize', async (req, res) => {
  const { inputType, sourceUrl } = req.body;

  // Placeholder for summarization logic (e.g., using AI or an API)
  const summaryText = `Summary of ${sourceUrl}`;

  try {
    const newSummary = new Summary({ inputType, sourceUrl, summaryText });
    await newSummary.save();
    res.status(201).json(newSummary);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all summaries
router.get('/summaries', async (req, res) => {
  try {
    const summaries = await Summary.find();
    res.status(200).json(summaries);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
