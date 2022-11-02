const { Server } = require("socket.io");
const path = require("path");
require("colors");
const configPath = path.join(__dirname, "..", ".env");
require("dotenv").config({ path: configPath });
const { createServer } = require("http");
const PORT = process.env.PORT || 3030;
const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("chat-message", (message, user) => {
    socket.broadcast.emit("chat-message", message, user);
  });
});

httpServer.listen(PORT, () => {
  try {
    console.log(
      `Server running. Use our API on port: ${PORT}`.bold.cyan.italic
    );
  } catch (error) {
    console.log(
      `Server not running. Error message: ${err.message}`.bold.red.italic
    );
  }
});
