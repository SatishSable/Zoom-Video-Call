import express from "express";
import { createServer } from "node:http";
import dotenv from "dotenv";

import { Server } from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";

// Load environment variables
dotenv.config();

const app = express();

// Request Logger Middleware
app.use((req, res, next) => {
    console.log(`📡 ${req.method} request to ${req.url}`);
    next();
});

const server = createServer(app);
const io = connectToSocket(server);


app.set("port", (process.env.PORT || 8000))

// CORS configuration for production and development
const corsOptions = {
    origin: process.env.NODE_ENV === 'production'
        ? [process.env.FRONTEND_URL, /\.netlify\.app$/, /\.vercel\.app$/]
        : ['http://localhost:3000', 'http://127.0.0.1:3000', 'http://localhost:3001', 'http://127.0.0.1:3001'],
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

const start = async () => {
    app.set("mongo_user")

    // Use exact environment variable or provided string
    const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://satishsable2004_db_user:3Y0FM7GBchIq2ZdQ@cluster0.labp0to.mongodb.net/";

    try {
        const connectionDb = await mongoose.connect(MONGODB_URI);
        console.log(` MONGO Connected to YOUR Database!`);
        console.log(` Database Host: ${connectionDb.connection.host}`);
        console.log(` Database Name: ${connectionDb.connection.name}`);
    } catch (error) {
        console.error(" MongoDB Connection Error:", error.message);
        process.exit(1);
    }

    server.listen(app.get("port"), () => {
        console.log(` Server listening on PORT ${app.get("port")}`)
    });
}

start(); 