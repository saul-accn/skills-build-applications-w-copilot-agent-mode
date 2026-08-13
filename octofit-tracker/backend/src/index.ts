import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = 8000;
const MONGODB_URI = 'mongodb://localhost:27017/octofit-tracker';

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('✓ MongoDB connected');
  })
  .catch((error) => {
    console.error('✗ MongoDB connection error:', error);
  });

// Basic Health Check Route
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'OctoFit Tracker API is running' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`✓ OctoFit Tracker API server running on port ${PORT}`);
});
