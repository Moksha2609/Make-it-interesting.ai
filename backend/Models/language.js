const mongoose = require('mongoose');

const LanguageSchema = new mongoose.Schema({
  name: String,
  topics: [String]
});

module.exports = mongoose.model('Language', LanguageSchema);
