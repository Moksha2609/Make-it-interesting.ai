const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const storyRoutes = require('./routes/story');
const reelRoutes = require('./routes/reels');
const taskRoutes = require('./routes/tasks');
const learnRoutes = require('./routes/learn');
const summarizerRoutes = require('./routes/summarizer');
const podcastRoutes = require('./routes/podcast');

// Use Routes
app.use('/api/story', storyRoutes);
app.use('/api/reels', reelRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/learn', learnRoutes);
app.use('/api/summarizer', summarizerRoutes);
app.use('/api/podcast', podcastRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
