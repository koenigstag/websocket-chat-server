const http = require("http");
const app = require("./app");
const { Server } = require("socket.io");
const config = require("./configs");

const PORT = config.PORT || 5000;

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  /* options */
});

io.on("connection", (socket) => {
  console.log("new connection on socket.io");

  socket.on("disconnect", (reason) => {
    console.log("reason of disconneting", reason);
  });

  socket.on("new_message", (data) => {
    socket.emit("new_message", data);
  });
});

httpServer.listen(PORT, () => {
  console.log("App is listening on PORT", PORT);
});

module.exports = httpServer;
