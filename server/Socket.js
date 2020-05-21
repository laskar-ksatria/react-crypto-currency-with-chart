const SocketIo = require('socket.io');

function IoConnect(server) {
    const Io = SocketIo(server);
    Io.on('connection', socket => {
        console.log('Io connect')


        socket.on('disconnect', () => {
            console.log('Io disconnect')
        })
    })
};

module.exports = IoConnect;