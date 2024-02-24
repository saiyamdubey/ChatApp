// one issuse also that i created the nextjs app

// in the file stucture i put the the server folder in the src folder and in that i make the index.js file which is the server or socket connection file becuase i not used page/api file for serverless architechure soo that after deployment of the project the frontend is all good but the server file is not initiated at the vercel server so plx help

import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("A client connected", socket.id);

  // Handle incoming messages from clients
  socket.on("message", (message) => {
    console.log("Received message:", message);
    // Broadcast the message to all clients except the sender
    socket.broadcast.emit("message", message);
  });

  // Handle client disconnection
  socket.on("disconnect", () => {
    console.log("A client disconnected");
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
