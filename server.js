const { socketRouting } = require("./routes/socketRouting");

const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

const port = parseInt(process.env.PORT, 10) || 8000;
const dev = process.env.NODE_ENV !== "production";

// socket.io server
io.on("connection", socket => {
    socketRouting(socket);
});

// on change app par server
server.listen(port, function () {
    console.log('Ready on localhost:' + port)
})
