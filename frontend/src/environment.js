// Automatically detect environment
const IS_PROD = process.env.NODE_ENV === 'production' || window.location.hostname !== 'localhost';

// Backend server URL
const server = IS_PROD
    ? process.env.REACT_APP_BACKEND_URL || "https://apnacollegebackend.onrender.com"
    : "http://localhost:8000";

export default server;