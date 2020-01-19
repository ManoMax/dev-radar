const socketio = require('socket.io');
const parseStringAsArray = require('./utils/parseStringToArray');

const connection = [];

exports.setupWebsocket = (server) => {
    const io = socketio(server);

    io.on('connection', socket => {
        const { latitude, longitude, techs } = socket.handshake.query;

        connection.push({
            id: socket.id,
            coordenates: {
                latitude: Number(latitude),
                longitude: Number(longitude),
            },
            techs: parseStringAsArray(techs),
        });
    });
};