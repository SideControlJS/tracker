// routes/users.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');

// @route GET api/users
// @desc Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// @route POST api/users
// @desc Create a user
router.post('/', async (req, res) => {
    const { userName, userEmail, userPassword } = req.body;

    try {
        const newUser = new User({
            userName,
            userEmail,
            userPassword
        });

        const user = await newUser.save();

        res.json(user);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// @route EDIT api/users/:id
// @desc Edit a user
router.put('/:id', async (req, res) => {
    const { userName, userEmail, userPassword } = req.body;

    // Build user object
    const userFields = {};
    if (userName) userFields.userName = userName;
    if (userEmail) userFields.userEmail = userEmail;
    if (userPassword) userFields.userPassword = userPassword;

    try {
        let user = await User.findById(req.params.id);

        if (!user) return res.status(404).json({ msg: 'User not found' });

        user = await User.findByIdAndUpdate(
            req.params.id,
            { $set: userFields },
            { new: true }
        );

        res.json(user);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;