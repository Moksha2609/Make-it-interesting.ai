const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const storyRoutes = require('./routes/story');
const reelRoutes = require('./routes/reels');
const taskRoutes = require('./routes/tasks');
const learnRoutes = require('./routes/learn');
const summarizerRoutes = require('./routes/summarizer');
const podcastRoutes = require('./routes/podcast');

// Load environment variables
dotenv.config();

// Initialize the Express app
const app = express();

// Middleware
app.use(cors()); // To enable CORS
app.use(express.json()); // To parse JSON bodies

// API Routes
app.use('/api/stories', storyRoutes);
app.use('/api/reels', reelRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/learn', learnRoutes);
app.use('/api/summarizer', summarizerRoutes);
app.use('/api/podcasts', podcastRoutes);

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  }
};

// Start server and connect to the database
const startServer = async () => {
  await connectDB();
  app.listen(process.env.PORT || 5000, () => {
    console.log('Server running on port ' + (process.env.PORT || 5000));
  });
};

startServer();
