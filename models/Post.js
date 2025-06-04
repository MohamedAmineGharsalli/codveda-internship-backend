const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Post title is required'],
    trim: true,
  },
  body: {
    type: String,
    required: [true, 'Post body is required'],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to User model
    required: true,
  }
}, { timestamps: true });

// Index for faster user lookup
postSchema.index({ user: 1 });

module.exports = mongoose.model('Post', postSchema);
