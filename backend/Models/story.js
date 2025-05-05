const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
  title: String,
  content: String,
  backgroundVideoUrl: String,
  duration: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Story', StorySchema);
