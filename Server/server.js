const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
const app = require("./app");
const formatMessage = require("./utils/messages");
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} = require("./utils/users");

dotenv.config({ path: "./config.env" });

// Initialize Express app
// Initialize HTTP server
const server = http.createServer(app);
// Initialize Socket.io
const io = socketio(server);

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch(() => {
    console.log("Database connection failed");
  });

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

const botName = "Shanky.bot";

io.on("connection", (socket) => {
  socket.on("joinRoom", ({ username, room }) => {
    const user = userJoin(socket.id, username, room);
    socket.join(user.room);

    socket.emit(
      "message",
      formatMessage(botName, "Welcome to Shanky.Well Community!")
    );

    socket.broadcast
      .to(user.room)
      .emit(
        "message",
        formatMessage(botName, `${user.username} has joined the chat`)
      );

    io.to(user.room).emit("roomUsers", {
      room: user.room,
      users: getRoomUsers(user.room),
    });
  });

  socket.on("chatMessage", (msg) => {
    const user = getCurrentUser(socket.id);

    io.to(user.room).emit("message", formatMessage(user.username, msg));
  });

  socket.on("disconnect", () => {
    const user = userLeave(socket.id);

    if (user) {
      io.to(user.room).emit(
        "message",
        formatMessage(botName, `${user.username} has left the chat`)
      );

      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getRoomUsers(user.room),
      });
    }
  });
});

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`Listening to server at port ${PORT}`);
});
