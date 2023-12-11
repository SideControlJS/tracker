// app.js (Main Application File)

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());


// Connect to MongoDB
mongoose.connect('your-mongodb-uri', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


// Use Routes
app.use('/api/rooms', require('./routes/rooms'));
app.use('/api/devices', require('./routes/devices'));
app.use('/api/issues', require('./routes/issues'));
app.use('/api/users', require('./routes/users'));

// Serve static assets if in production
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
