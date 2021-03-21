

function socketRouting(socket) {

    socket.on("servo-control-topic", data => {
        console.log({ data });
        socket.emit("servo-control-topic", data);
    });

}

exports.socketRouting = socketRouting;