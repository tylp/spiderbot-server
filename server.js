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
    socket.on("hello-room", data => {
        console.log({ data });
        socket.emit("hello-room", data);
    });
});

// on change app par server
server.listen(port, function () {
    console.log('Ready on localhost:' + port)
})
