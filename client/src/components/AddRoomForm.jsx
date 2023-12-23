import React, { useState } from 'react';
import axios from 'axios';

const AddRoomForm = () => {
    const [roomName, setRoomName] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (roomName.trim() === '') {
            setError('Room name cannot be empty');
            return;
        }
        try {
            const newRoom = {
                roomName
            };
            await axios.post('http://localhost:5000/rooms', newRoom);
            setRoomName('');
            setError(null); // clear error message after successful submission
        } catch (err) {
            console.log(err);
            setError('An error occurred while adding the room');
        }
    };
    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '200px',
        margin: '0 auto'
    };

    const inputStyle = {
        margin: '10px 0',
        padding: '10px',
        fontSize: '16px'
    };

    const buttonStyle = {
        padding: '10px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <input
                type='text'
                placeholder='Room Name'
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                style={inputStyle}
            />
            {error && <p>{error}</p>}
            <button type='submit' style={buttonStyle}>Add Room</button>
        </form>
    );
}

export default AddRoomForm;