const mongoose = require('mongoose');

const PodcastSchema = new mongoose.Schema({
  topic: String,
  length: {
    type: String,
    enum: ['5-10', '15-20', '50-55']
  },
  voiceStyle: {
    type: String,
    enum: ['genz', 'formal', 'friendly']
  },
  audioUrl: String,
  scriptText: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Podcast', PodcastSchema);
