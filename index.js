const http = require('http');
const app = require('./app');
const { Server } = require('socket.io');
const { EVENTS } = require('./configs/socket.io');
const config = require('./configs');
const { message: Message } = require('./models');

const PORT = config.PORT || 5000;

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  /* options */
  cors: '*',
});

io.on('connection', (socket) => {
  console.log('new connection on socket.io');

  socket.on('disconnect', (reason) => {
    console.log('reason of disconneting', reason);
  });

  socket.on(EVENTS.NEW_MESSAGE, async (data) => {
    console.log('new msg', data);

    try {
      const createdMsg = await Message.create({
        ...data,
      });
      socket.emit(EVENTS.NEW_MESSAGE, createdMsg);
    } catch (error) {
      socket.emit(EVENTS.NEW_MESSAGE_ERROR, error);
    }
  });
});

httpServer.listen(PORT, () => {
  console.log('App is listening on PORT', PORT);
});

module.exports = httpServer;
