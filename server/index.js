const express = require("express");
const app = express();
const path = require("path");

const server = require("http").Server(app);
const io = require("socket.io")(server);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Listen on *: ${PORT}`));

io.on("connection", (socket) => {
  const { id } = socket.client;
  console.log(`User connected: ${id}`);

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
    //console.log(id + msg);
  });
});
