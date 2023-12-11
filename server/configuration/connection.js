// connection.js

// Load required packages
const mongoose = require('mongoose');
require('dotenv').config(); // This line loads the .env file content into process.env

// Now you can use process.env to access your mongoURI
const mongoURI = process.env.MONGO_URI; // Make sure the variable name matches your .env file

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectToMongo; // Don't forget to export your function if it's used elsewhere
