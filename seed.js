const mongoose = require('mongoose');
const User = require('./server/models/User'); // Correct path to User model
const Device = require('./server/models/Device'); // Correct path to Device model
const Room = require('./server/models/Room'); // Correct path to Room model
const Issue = require('./server/models/Issue'); // Correct path to Issue model

// Connect to MongoDB (removed deprecated options)
mongoose.connect('mongodb://localhost:27017/tracker');

async function seedDB() {
  try {
    // Clean up the existing collections
    await User.deleteMany({});
    await Device.deleteMany({});
    await Room.deleteMany({});
    await Issue.deleteMany({});

    // Create seed data for Users with required fields
    const user1 = await User.create({
      userName: 'John Doe',
      userEmail: 'johnDoe@example.com',
      userPassword: 'securepassword123' // Provide a valid password for the user
    });

    const user2 = await User.create({
      userName: 'Jane Smith',
      userEmail: 'janeSmith@example.com',
      userPassword: 'securepasswordABC' // Provide a valid password for the user
    });

    // Create seed data for Rooms
    const room1 = await Room.create({ roomNumber: '101', roomName: 'King' });
    const room2 = await Room.create({ roomNumber: '102', roomName: 'Queen' });

    // Create seed data for Devices, including all required fields
    const device1 = await Device.create({
      name: 'Living Room Keypad',
      serialNumber: 'SN001', // Example serial number
      type: 'Keypad', // Example type
      room: room1._id // Use the ObjectId from the created room
    });

    const device2 = await Device.create({
      name: 'Entry Occupancy Sensor',
      serialNumber: 'SN002', // Example serial number
      type: 'Sensor', // Example type
      room: room2._id // Use the ObjectId from the created room
    });

    // Create seed data for Issues, referencing Users, Rooms, and Devices
    const issue1 = await Issue.create({
      issueId: 'ISSUE1',
      description: 'Keypad not responding',
      status: 'Open',
      reportedBy: user1._id,
      assignedTo: user2._id,
      room: room1._id,
      device: device1._id
    });

    const issue2 = await Issue.create({
      issueId: 'ISSUE2',
      description: 'Sensor malfunction',
      status: 'In Progress',
      reportedBy: user2._id,
      assignedTo: user1._id,
      room: room2._id,
      device: device2._id
    });

    console.log('Database seeded!');
  } catch (error) {
    console.error('Seeding error:', error);
  } finally {
    // Close the Mongoose connection
    mongoose.connection.close();
  }
}

seedDB();
