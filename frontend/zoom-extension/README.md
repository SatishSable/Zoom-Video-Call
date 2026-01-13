# Apna Video Call - Browser Extension

A full-stack video conferencing browser extension that connects to MongoDB through the backend server.

## 🚀 Features
- Video conferencing with multiple participants
- Guest access and user authentication
- Real-time communication using Socket.IO
- MongoDB database integration (via backend)
- Beautiful, modern UI

## 📋 Prerequisites

Before installing the extension, make sure:

1. **Backend server is running** on `http://localhost:8000`
   - The backend connects to MongoDB automatically
   - Navigate to: `c:\Users\hp\Downloads\Zoom-main\Zoom-main\backend`
   - Run: `npm run dev`

2. **MongoDB connection is active**
   - The backend is already configured to connect to MongoDB
   - Connection string is in the backend configuration

## 🔧 Installation Instructions

### For Chrome/Edge/Brave:

1. **Open Extension Management Page:**
   - Chrome: Navigate to `chrome://extensions/`
   - Edge: Navigate to `edge://extensions/`
   - Brave: Navigate to `brave://extensions/`

2. **Enable Developer Mode:**
   - Toggle the "Developer mode" switch in the top-right corner

3. **Load the Extension:**
   - Click "Load unpacked" button
   - Navigate to: `c:\Users\hp\Downloads\Zoom-main\Zoom-main\frontend\zoom-extension`
   - Click "Select Folder"

4. **Pin the Extension:**
   - Click the puzzle icon in your browser toolbar
   - Find "Apna Video Call" and click the pin icon

## 🎯 Usage

1. **Start the Backend Server** (if not already running):
   ```bash
   cd c:\Users\hp\Downloads\Zoom-main\Zoom-main\backend
   npm run dev
   ```

2. **Click the Extension Icon** in your browser toolbar

3. **Start Using:**
   - Join as Guest
   - Register a new account
   - Login to existing account
   - Start or join video calls

## 🔌 Backend Connection

The extension communicates with:
- **Local Backend:** `http://localhost:8000`
- **Production Backend:** `https://apnacollegebackend.onrender.com`

The backend handles all MongoDB operations, so the extension works seamlessly with your database.

## 📝 Notes

- The extension popup has limited screen space. For full experience, you can open it in a new tab.
- Make sure the backend server is running before using the extension.
- The extension will automatically connect to your MongoDB database through the backend API.

## 🛠️ Development

To make changes:
1. Edit files in `c:\Users\hp\Downloads\Zoom-main\Zoom-main\frontend\src`
2. Run `npm run build` in the frontend directory
3. Copy the build files to `zoom-extension` folder
4. Reload the extension in your browser

## 📦 Extension Structure

```
zoom-extension/
├── manifest.json          # Extension configuration
├── index.html            # Main popup HTML
├── static/               # JS and CSS files
│   ├── js/              # React application
│   └── css/             # Styles
└── *.png                # Icons and images
```

## 🔒 Permissions

The extension requires:
- **storage**: To save user preferences
- **host_permissions**: To communicate with backend API (MongoDB access)

---

**Enjoy your video calls! 📹**
