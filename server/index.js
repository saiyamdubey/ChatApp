import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server,{
  cors: { origin: '*' },
});

io.on("connection", (socket) => {
  console.log("A client connected",socket.id);

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
