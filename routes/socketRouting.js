const Gpio = require('onoff').Gpio;

function socketRouting(socket) {

    socket.on("servo-control-topic", data => {
        console.log({ data });
        socket.emit("servo-control-topic", data);

        const servo = new Gpio(12, 'out');
        servo.write(20);
    });

}

exports.socketRouting = socketRouting;