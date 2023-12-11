// server.js (Main Application File)

const express = require('express');
const app = express();
const connectToMongo = require('./configuration/connection'); // Ensure this path is correct

// Connect to MongoDB using the external file
connectToMongo();

// Body parser Middleware (Using built-in Express body parser)
app.use(express.json());

// Use Routes
app.use('/api/rooms', require('./routes/rooms')); // Ensure these paths are correct
app.use('/api/devices', require('./routes/devices'));
app.use('/api/issues', require('./routes/issues'));
app.use('/api/users', require('./routes/users'));

// Serve static assets if in production
// If you want to serve your React build in production, you can add:
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

