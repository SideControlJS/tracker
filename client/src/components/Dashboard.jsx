import React, { useState } from 'react';
import { Button } from '@mui/material';
import RoomList from './RoomList'; 

const Dashboard = () => {
  const [showRoomList, setShowRoomList] = useState(false);

  // Toggle the visibility of the RoomList component
  const goToRoomList = () => {
    setShowRoomList(true);
  };

  return (
    <div>
      {/* ... other dashboard content */}
      <Button variant="contained" color="primary" onClick={goToRoomList}>
        Room List
      </Button>
      {showRoomList && <RoomList />}
      {/* ... other dashboard content */}
    </div>
  );
};

export default Dashboard;

