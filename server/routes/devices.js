const express = require('express');
const router = express.Router();
const Device = require('../models/Device');

// @route   GET api/devices
// @desc    Get all devices
router.get('/', async (req, res) => {
    try {
        const devices = await Device.find();
        res.json(devices);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// @route   POST api/devices
// @desc    Create a device
router.post('/', async (req, res) => {
    const { deviceName, deviceType, deviceStatus } = req.body;

    try {
        const newDevice = new Device({
            deviceName,
            deviceType,
            deviceStatus
        });

        const device = await newDevice.save();

        res.json(device);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// @route   EDIT api/devices/:id
// @desc    Edit a device
router.put('/:id', async (req, res) => {
    const { deviceName, deviceType, deviceStatus } = req.body;

    // Build device object
    const deviceFields = {};
    if (deviceName) deviceFields.deviceName = deviceName;
    if (deviceType) deviceFields.deviceType = deviceType;
    if (deviceStatus) deviceFields.deviceStatus = deviceStatus;

    try {
        let device = await Device.findById(req.params.id);

        if (!device) return res.status(404).json({ msg: 'Device not found' });

        device = await Device.findByIdAndUpdate(
            req.params.id,
            { $set: deviceFields },
            { new: true }
        );

        res.json(device);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// @route   DELETE api/devices/:id
// @desc    Delete a device
router.delete('/:id', async (req, res) => {
    try {
        let device = await Device.findById(req.params.id);

        if (!device) return res.status(404).json({ msg: 'Device not found' });

        await Device.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Device removed' });
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;