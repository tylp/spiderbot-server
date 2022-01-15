const Gpio = require('pigpio').Gpio;

function socketRouting(socket) {

    socket.on("servo-control-topic", data => {
        console.log({ data });
        socket.emit("servo-control-topic", data);

        const servo = new Gpio(12, {mode: Gpio.OUTPUT})
        servo.servoWrite(data.value);
    });

}

exports.socketRouting = socketRouting;