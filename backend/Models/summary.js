const mongoose = require('mongoose');

const SummarySchema = new mongoose.Schema({
  inputType: {
    type: String,
    enum: ['text', 'document', 'video']
  },
  sourceUrl: String,
  summaryText: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Summary', SummarySchema);
