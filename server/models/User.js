// models/User.js

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    userEmail: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    userPassword: {
        type: String,
        required: true
    }
    // Add other user properties here
});

// Pre-save hook to hash the password before saving it to the database
UserSchema.pre('save', async function (next) {
    // Only hash the password if it has been modified (or is new)
    if (!this.isModified('userPassword')) return next();

    try {
        // Generate a salt
        const salt = await bcrypt.genSalt(10);
        // Hash the password using the salt
        this.userPassword = await bcrypt.hash(this.userPassword, salt);
        next();
    } catch (err) {
        next(err);
    }
});

// Method to compare passwords
UserSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.userPassword);
};

module.exports = mongoose.model('User', UserSchema);
