const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: String,
  type: {
    type: String,
    enum: ['quiz', 'fill-blank', 'descriptive', 'coding']
  },
  question: String,
  options: [String],
  answer: String,
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard']
  },
  streakPoints: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Task', TaskSchema);
