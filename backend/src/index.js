import express from "express";
import authRoutes from "../routes/auth.route.js";
import messageRoutes from "../routes/message.route.js";
import dotenv from "dotenv";
import { connectDb } from "../lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "../lib/socket.js";

dotenv.config();

app.use(express.json({ limit: "50mb" }));
app.use(cookieParser({ limit: "50mb", extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(process.env.PORT, () => {
  console.log("the port is running on port: ", process.env.PORT);
  connectDb();
});
