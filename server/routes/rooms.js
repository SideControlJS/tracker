const express = require('express');
const router = express.Router();
const Room = require('../models/Room');


// @route   GET api/rooms
// @desc    Get all rooms
router.get('/', async (req, res) => {
    try {
        const rooms = await Room.find();
        res.json(rooms);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// @route   POST api/rooms
// @desc    Create a room
router.post('/', async (req, res) => {
    const { roomNumber, roomType, roomStatus } = req.body;

    try {
        const newRoom = new Room({
            roomNumber,
            roomType,
            roomStatus
        });

        const room = await newRoom.save();

        res.json(room);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// @route   EDIT api/rooms/:id
// @desc    Edit a room
router.put('/:id', async (req, res) => {
    const { roomNumber, roomType, roomStatus } = req.body;

    // Build room object
    const roomFields = {};
    if (roomNumber) roomFields.roomNumber = roomNumber;
    if (roomType) roomFields.roomType = roomType;
    if (roomStatus) roomFields.roomStatus = roomStatus;

    try {
        let room = await Room.findById(req.params.id);

        if (!room) return res.status(404).json({ msg: 'Room not found' });

        room = await Room.findByIdAndUpdate(
            req.params.id,
            { $set: roomFields },
            { new: true }
        );

        res.json(room);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// @route   DELETE api/rooms/:id
// @desc    Delete a room
router.delete('/:id', async (req, res) => {
    try {
        let room = await Room.findById(req.params.id);

        if (!room) return res.status(404).json({ msg: 'Room not found' });

        await Room.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Room removed' });
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;