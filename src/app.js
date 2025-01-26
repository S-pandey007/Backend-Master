import dotenv from 'dotenv'
dotenv.config()
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet"; // for security headers

const app = express();

// CORS configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// JSON and URL-encoded data parsing with limits
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Cookie parser for handling cookies
app.use(cookieParser());

// Security headers
app.use(helmet());

// Static file serving
app.use(express.static("public"));

// Error handling middleware (optional, for CORS issues)
app.use((err, req, res, next) => {
    if (err) {
        res.status(500).send('Something went wrong with CORS');
    } else {
        next();
    }
});

export { app };
