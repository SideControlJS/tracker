// connection.js

const mongoose = require('mongoose');
require('dotenv').config(); // Loads the .env file content into process.env

const mongoURI = process.env.mongoURI; // Correctly matches the .env variable name

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1);
    }
};

module.exports = connectToMongo;

