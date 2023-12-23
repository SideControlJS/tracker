const mongoose = require('mongoose');
const Room = require('./models/Room'); // Adjust the path based on your structure
const Device = require('./models/Device');
const Issue = require('./models/Issue');
const User = require('./models/User');

mongoose.connect('mongodb://localhost:27017/tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const seedRooms = [
  { roomNumber: '101', roomName: 'King', devices: '15', issues: '2' },
  { roomNumber: '102', roomName: 'Queen', devices: '11', issues: '0' }
  // ... more rooms
];

const seedDevices = [
    { name: 'Living Room Keypad' }, { name: 'Bedroom Keypad' }, { name: 'Entry Keypad' }, { name: 'Entry Occupany Sensor' }, { name: 'Living Room Occupancy Sensor' }, { name: 'Bedroom Occupancy Sensor' }, { name: 'Living Room Thermostat' }, { name: 'Bedroom Thermostat' }, { name: 'Entry Thermostat' }, { name: 'Living Room Light' }, { name: 'Bedroom Light' }, { name: 'Entry Light' }, { name: 'Living Room Shade' }, { name: 'Bedroom Shade' }, { name: 'Entry Shade' }, { name: 'Living Room TV' }, { name: 'Bedroom TV' }, { name: 'Entry TV' }, { name: 'Living Room Speaker' }, { name: 'Bedroom Speaker' }, { name: 'Entry Speaker' }, { name: 'Living Room Camera' }, { name: 'Bedroom Camera' }, { name: 'Entry Camera' }, { name: 'Living Room Door Lock' }, { name: 'Bedroom Door Lock' }, { name: 'Entry Door Lock' }, { name: 'Living Room Window Lock' }, { name: 'Bedroom Window Lock' }, { name: 'Entry Window Lock' }, { name: 'Living Room Window Shade' }, { name: 'Bedroom Window Shade' }, { name: 'Entry Window Shade' }, { name: 'Living Room Window' }, { name: 'Bedroom Window' }, { name: 'Entry Window' }, { name: 'Living Room Printer' }, { name: 'Bedroom Printer' }, { name: 'Entry Printer' },
    // ... more devices
];

// ... Seed data for Issues and Users

const seedDB = async () => {
  await Room.deleteMany({});
  await Device.deleteMany({});
  // ... clear other collections if needed

  await Room.create(seedRooms);
  await Device.create(seedDevices);
  // ... insert other seed data

  console.log('Database seeded!');
};

seedDB().then(() => {
  mongoose.connection.close();
});
