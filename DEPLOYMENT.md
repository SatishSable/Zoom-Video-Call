# 🚀 Deployment Guide - Zoom Video Call

## Quick Deployment Steps

### Step 1: Push to GitHub

1. **Initialize Git** (if not already done):
```bash
cd c:\Users\hp\Downloads\Zoom-main\Zoom-main
git init
git add .
git commit -m "Initial commit - Ready for deployment"
```

2. **Create GitHub Repository:**
   - Go to https://github.com/new
   - Name: `zoom-video-call` (or your choice)
   - Make it **Private** (recommended - contains sensitive code)
   - Don't initialize with README
   - Click "Create repository"

3. **Push Code:**
```bash
git remote add origin https://github.com/YOUR_USERNAME/zoom-video-call.git
git branch -M main
git push -u origin main
```

---

### Step 2: Deploy Backend to Render

1. **Go to Render:** https://render.com/
2. **Sign up/Login** with GitHub
3. **New Web Service:**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select `zoom-video-call` repository

4. **Configure Service:**
   - **Name:** `zoom-backend` (or your choice)
   - **Region:** Choose closest to you
   - **Branch:** `main`
   - **Root Directory:** `backend`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free

5. **Environment Variables** (Click "Advanced"):
   ```
   NODE_ENV=production
   MONGODB_URI=mongodb+srv://satishsable2004_db_user:3Y0FM7GBchIq2ZdQ@cluster0.labp0to.mongodb.net/zoom_video_call
   JWT_SECRET=ZoomApp_2024_SecureKey_8f3a9c2e1d7b6a4f9e2c8d1a5b7f3e9c
   PORT=8000
   ```

6. **Create Web Service** - Wait for deployment (5-10 minutes)
7. **Copy Backend URL:** `https://zoom-backend-xxxx.onrender.com`

---

### Step 3: Deploy Frontend to Netlify

1. **Go to Netlify:** https://app.netlify.com/
2. **Sign up/Login** with GitHub
3. **Add New Site:**
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub
   - Select `zoom-video-call` repository

4. **Configure Build:**
   - **Base directory:** `frontend`
   - **Build command:** `npm run build`
   - **Publish directory:** `frontend/build`

5. **Environment Variables** (Site settings → Environment variables):
   ```
   REACT_APP_BACKEND_URL=https://zoom-backend-xxxx.onrender.com
   ```
   *(Replace with YOUR Render backend URL from Step 2)*

6. **Deploy Site** - Wait for build (3-5 minutes)
7. **Your App URL:** `https://your-app-name.netlify.app`

---

### Step 4: Update Backend CORS

1. **Go to Render Dashboard** → Your backend service
2. **Environment** → Add variable:
   ```
   FRONTEND_URL=https://your-app-name.netlify.app
   ```
   *(Replace with YOUR Netlify URL from Step 3)*

3. **Save** - Service will auto-redeploy

---

### Step 5: Test Deployment

1. **Open Frontend:** `https://your-app-name.netlify.app`
2. **Register New User:**
   - Name: Test User
   - Username: testuser
   - Password: test123

3. **Check MongoDB Atlas:**
   - Login to https://cloud.mongodb.com
   - Browse Collections → `zoom_video_call` → `users`
   - You should see the new user!

4. **Test Video Call:**
   - Create a meeting
   - Share link with friend
   - Test video/audio (requires HTTPS - both sites have it!)

---

## 🔧 Troubleshooting

**Backend not starting?**
- Check Render logs for errors
- Verify MongoDB URI is correct
- Ensure all environment variables are set

**Frontend can't connect to backend?**
- Check `REACT_APP_BACKEND_URL` in Netlify
- Verify CORS settings in backend
- Check browser console for errors

**Video not working?**
- Both sites must be HTTPS (they are!)
- Allow camera/microphone permissions
- Try different browser

---

## 📝 Important URLs

After deployment, save these:

- **Frontend:** `https://your-app-name.netlify.app`
- **Backend:** `https://zoom-backend-xxxx.onrender.com`
- **GitHub:** `https://github.com/YOUR_USERNAME/zoom-video-call`
- **MongoDB:** `https://cloud.mongodb.com`

---

## 🎉 You're Live!

Your Zoom video calling app is now deployed and accessible worldwide!

**Share your app:** Send the Netlify URL to friends and start video calling!
