import React, { useEffect, useState } from 'react';
import { getRooms } from '../services/api';

const RoomList = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const fetchRooms = async () => {
            const rooms = await getRooms();
            setRooms(rooms);
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