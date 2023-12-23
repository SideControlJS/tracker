import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

const RoomList = () => {
    const [rooms, setRooms] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {
        // Replace with your actual API call
        axios.get('http://localhost:5000/api/rooms')
            .then((response) => {
                setRooms(response.data);
            })
            .catch((error) => {
                console.error('Error fetching rooms:', error);
            });
    }, []);

    const handleOpenDialog = (room) => {
        setSelectedRoom(room);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <div>
            <Button variant="contained" onClick={() => setOpenDialog(true)}>
                Room List
            </Button>
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Rooms</DialogTitle>
                <DialogContent>
                    <List>
                        {rooms.map((room) => (
                            <ListItem button key={room._id} onClick={() => handleOpenDialog(room)}>
                                <ListItemText primary={`Room Number: ${room.roomNumber}`} />
                            </ListItem>
                        ))}
                    </List>
                    {selectedRoom && (
                        <DialogContentText>
                            <strong>Room Name:</strong> {selectedRoom.roomName}<br />
                            <strong>Devices:</strong> {/* Map through devices here */}<br />
                            <strong>Open Issues:</strong> {/* Map through open issues here */}<br />
                            <strong>Resolved Issues:</strong> {/* Map through resolved issues here */}
                        </DialogContentText>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default RoomList;
