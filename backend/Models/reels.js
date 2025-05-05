const mongoose = require('mongoose');

const ReelSchema = new mongoose.Schema({
  storyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Story'
  },
  videoUrl: String,
  shortDescription: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Reel', ReelSchema);
