const mongoose = require('mongoose');
const Room = require('./server/models/Room'); // Adjust the path based on your structure
const Device = require('./server/models/Device');
const Issue = require('./server/models/Issue');
const User = require('./server/models/User');

mongoose.connect('mongodb://localhost:27017/tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Seed function
async function seedDB() {
  // Clean up the existing collections
  await User.deleteMany({});
  await Device.deleteMany({});
  await Room.deleteMany({});
  await Issue.deleteMany({});

  // Create seed data for Users
  const user1 = await User.create({ userName: 'John Doe', userEmail: 'johnDoe@example.com', userPassword: 'password123'});
  const user2 = await User.create({ userName: 'Jane Smith', userEmail: 'janeSmith@example.com', userPassword: 'password12' });

  // Create seed data for Devices
  const device1 = await Device.create({ type: 'Keypad', serialNumber: '1234567890', status: 'Active', room: '101' });
  const device2 = await Device.create({ type: 'Sensor', serialNumber: '0987654321', status: 'Inactive', room: '102' });

  // Create seed data for Rooms
  const room1 = await Room.create({ roomNumber: '101', roomName: 'King', devices: [device1._id], issues: [] });
  const room2 = await Room.create({ roomNumber: '102', roomName: 'Queen', devices: [device2._id], issues: [] });

  // Create seed data for Issues
  const issue1 = await Issue.create({
    issueId: 'Z001',
    description: 'Keypad not responding to button presses',
    status: 'Open',
    reportedBy: user1._id, // Referencing the user1 document created above
    assignedTo: user2._id, // Referencing the user2 document created above
    room: room1._id, // Referencing the room1 document created above
    device: device1._id // Referencing the device1 document created above
  });

  const issue2 = await Issue.create({
    issueId: 'Z002',
    description: 'Sensor blew up',
    status: 'In Progress',
    reportedBy: user2._id, // Referencing the user2 document created above
    assignedTo: user1._id, // Referencing the user1 document created above
    room: room2._id, // Referencing the room2 document created above
    device: device2._id // Referencing the device2 document created above
  });

  console.log('Database seeded!');
}

// Execute the seed function
seedDB().then(() => {
  mongoose.connection.close();
}).catch(error => {
  console.error('Seeding error:', error);
  mongoose.connection.close();
});
