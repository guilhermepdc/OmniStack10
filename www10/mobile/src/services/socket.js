import socketio from 'socket.io-client';

// coloque seu IP conforme mostra no acima do código de barras do Expo
// ex.: 'http://xx.xxx.xxx.xx:3333'
const socket = socketio('http://xx.xxx.xxx.xx:3333', {
    autoConnect: false,
});

function subscribeToNewDevs(subscribeFunction) {
    socket.on('new-dev', subscribeFunction);
}


function connect(latitude, longitude, techs) {
    socket.io.opts.query = {
        latitude,
        longitude,
        techs,
    };

    socket.connect();
}

function disconnect() {
    if (socket.connected) {
        socket.disconnect();
    }
}

export {
    connect,
    disconnect,
    subscribeToNewDevs,
};10.150.243.84