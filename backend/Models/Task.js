const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: String,
    type: String, // (quiz, coding challenge)
    content: String, // Question or task content
    level: String, // (easy, medium, hard)
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
