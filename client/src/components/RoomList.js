import React, { useEffect, useState } from 'react';
import { getRooms } from '../services/api';

const RoomList = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await getRooms();
                setRooms(response.data); // Make sure to use response.data to get the actual rooms array
            } catch (error) {
                console.error('Error fetching rooms:', error);
                // Handle error here, for example by setting an error state and displaying a message
            }
        };

        fetchRooms();
    }, []);

    return (
        <div>
            <h1>Room List</h1>
            <ul>
                {rooms.map((room) => (
                    <li key={room._id}>
                        {room.roomNumber} - {room.roomType} - {room.roomStatus}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoomList;
