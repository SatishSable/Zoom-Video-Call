# 🎥 Zoom Video Call Application

A full-stack video conferencing application built with React, Node.js, Socket.IO, and WebRTC. This application enables real-time video and audio communication between multiple users with a modern, intuitive interface.

## ✨ Features

- **Real-time Video Calling** - High-quality peer-to-peer video communication using WebRTC
- **User Authentication** - Secure user registration and login system with JWT
- **Meeting Management** - Create, join, and manage video meetings
- **Socket.IO Integration** - Real-time signaling for seamless connection establishment
- **Responsive Design** - Material-UI based interface that works on all devices
- **MongoDB Database** - Persistent storage for user data and meeting information

## 🛠️ Tech Stack

### Frontend
- **React** - UI library for building interactive interfaces
- **Material-UI** - Modern component library for beautiful design
- **Socket.IO Client** - Real-time bidirectional communication
- **Axios** - HTTP client for API requests
- **React Router** - Client-side routing

### Backend
- **Node.js** - JavaScript runtime environment
- **Express** - Web application framework
- **Socket.IO** - Real-time communication server
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing

## 📁 Project Structure

```
Zoom-main/
├── backend/
│   ├── src/
│   │   ├── app.js              # Main application entry point
│   │   ├── controllers/        # Business logic
│   │   ├── models/             # Database models
│   │   └── routes/             # API routes
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.js              # Main React component
│   │   ├── pages/              # Page components
│   │   ├── contexts/           # React contexts
│   │   ├── utils/              # Utility functions
│   │   └── styles/             # CSS styles
│   └── package.json
└── DEPLOYMENT.md               # Deployment instructions
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account (or local MongoDB)
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/SatishSable/Zoom-Video-Call.git
cd Zoom-main
```

2. **Install Backend Dependencies**
```bash
cd backend
npm install
```

3. **Install Frontend Dependencies**
```bash
cd ../frontend
npm install
```

### Configuration

1. **Backend Environment Variables**

Create a `.env` file in the `backend` directory:
```env
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=8000
```

2. **Frontend Environment Variables**

Create a `.env` file in the `frontend` directory:
```env
REACT_APP_BACKEND_URL=http://localhost:8000
```

### Running the Application

1. **Start Backend Server**
```bash
cd backend
npm run dev
```
The backend will run on `http://localhost:8000`

2. **Start Frontend Development Server**
```bash
cd frontend
npm start
```
The frontend will run on `http://localhost:3000`

## 📖 Usage

1. **Register a New Account**
   - Open the application in your browser
   - Click on "Register" or "Sign Up"
   - Enter your name, username, and password
   - Submit the form to create your account

2. **Login**
   - Enter your username and password
   - Click "Login" to access the application

3. **Create a Meeting**
   - Click on "Create Meeting" or "New Meeting"
   - Share the meeting link with participants

4. **Join a Meeting**
   - Click on "Join Meeting"
   - Enter the meeting ID or use the shared link
   - Allow camera and microphone permissions
   - Start communicating!

## 🌐 Deployment

For detailed deployment instructions to production environments (Render + Netlify), please refer to [DEPLOYMENT.md](./DEPLOYMENT.md).

### Quick Deployment Overview

1. **Push to GitHub** - Version control your code
2. **Deploy Backend** - Use Render.com (free tier available)
3. **Deploy Frontend** - Use Netlify (free tier available)
4. **Configure Environment Variables** - Set production URLs and secrets
5. **Test** - Verify video calling functionality

## 🔐 Security Features

- Password hashing with bcrypt
- JWT-based authentication
- Secure HTTP-only cookies
- CORS configuration
- Environment variable protection

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [ISC License](LICENSE).

## 👨‍💻 Author

**Satish Sable**
- GitHub: [@SatishSable](https://github.com/SatishSable)

## 🙏 Acknowledgments

- Inspired by Zoom and modern video conferencing platforms
- Built with guidance from Apna College
- WebRTC documentation and community

## 📧 Contact

For questions or support, please open an issue in the GitHub repository.

---

**⭐ If you find this project useful, please consider giving it a star!**
