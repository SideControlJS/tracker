import axios from 'axios';

const API_URL = 'http://localhost:5000/api';


// ROOMS
export const getRooms = async () => {
    try {
        const res = await axios.get(`${API_URL}/rooms`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

// ISSUES
export const getIssues = async () => {
    try {
        const res = await axios.get(`${API_URL}/issues`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

// DEVICES
export const getDevices = async () => {
    try {
        const res = await axios.get(`${API_URL}/devices`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

// USERS
export const getUsers = async () => {
    try {
        const res = await axios.get(`${API_URL}/users`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

// AUTH
export const register = async (newUser) => {
    try {
        const res = await axios.post(`${API_URL}/users/register`, newUser);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

// AUTH
export const login = async (user) => {
    try {
        const res = await axios.post(`${API_URL}/users/login`, user);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

// AUTH
export const logout = async () => {
    try {
        const res = await axios.get(`${API_URL}/users/logout`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};



