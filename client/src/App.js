// src/App.js


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RoomList from './components/RoomList'; // Ensure you have created this component
import AddRoomForm from './components/AddRoomForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<RoomList />} />
        <Route path='/add' element={<AddRoomForm />} />
      </Routes>
    </Router>
  );
}

export default App;


