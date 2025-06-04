const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/posts', require('./routes/postRoutes'));


// MongoDB connection
const uri = "mongodb://localhost:27017/codveda";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));

// Default Route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// ✅ Register API routes BEFORE error handling
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));  // <-- Moved up

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// ✅ 404 handler should always be LAST
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
    .on('error', (err) => {
        console.error('Failed to start server:', err);
        process.exit(1);
    });
