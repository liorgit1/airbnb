// const toyService = require('../api/stay/stay.service')
// const logger = require('./logger.service')
// const asyncLocalStorage = require('./als.service');
const logger = require('./logger.service');

var gIo = null

function connectSockets(http, session) {
    gIo = require('socket.io')(http, {
        cors: {
            origin: '*',
        }
    })
    gIo.on('connection', socket => {
        // console.log('New socket', socket.id)
        socket.on('disconnect', socket => {
            // console.log('Someone disconnected')
        })
        socket.on('host topic', (id) => {
            if (socket.myTopic === id) return;
            if (socket.myTopic) {
                socket.leave(socket.myTopic)
            }
            socket.join(id)
            socket.myTopic = id
        })
        socket.on('addOrder', (order) => {
            console.log('Emitting new order', order);
            // emits to all sockets:
            gIo.emit('order recived', order)
                // emits only to sockets in the same room
            console.log(socket.myTopic);
            gIo.to(socket.myTopic).emit('order recived', order)
        })
        socket.on('order-status-change', (msg) => {
            console.log('Emitting new order', msg);
            // emits to all sockets:
            gIo.emit('order-status-change', msg)
                // emits only to sockets in the same room
                // console.log('sokkk', socket);
                // gIo.to(socket.myTopic).emit('order-status-change', msg)
        })



        socket.on('set-user-socket', userId => {
            logger.debug(`Setting (${socket.id}) socket.userId = ${userId}`)
            socket.userId = userId
        })
        socket.on('unset-user-socket', () => {
            delete socket.userId
        })

    })
}

function emitTo({ type, data, label }) {
    console.log(label);
    if (label) gIo.to('watching:' + label).emit(type, data)
    else gIo.emit(type, data)
}

async function emitToUser({ type, data, userId }) {
    logger.debug('Emiting to user socket: ' + userId)
    const socket = await _getUserSocket(userId)
    if (socket) socket.emit(type, data)
    else {
        console.log('User socket not found');
        _printSockets();
    }
}

// Send to all sockets BUT not the current socket 
async function broadcast({ type, data, room = null, userId }) {
    console.log('BROADCASTING', JSON.stringify(arguments));
    const excludedSocket = await _getUserSocket(userId)
    if (!excludedSocket) {
        // logger.debug('Shouldnt happen, socket not found')
        // _printSockets();
        return;
    }
    logger.debug('broadcast to all but user: ', userId)
    if (room) {
        excludedSocket.broadcast.to(room).emit(type, data)
    } else {
        excludedSocket.broadcast.emit(type, data)
    }
}

async function _getUserSocket(userId) {
    const sockets = await _getAllSockets();
    const socket = sockets.find(s => s.userId == userId)
    return socket;
}
async function _getAllSockets() {
    // return all Socket instances
    const sockets = await gIo.fetchSockets();
    return sockets;
}

async function _printSockets() {
    const sockets = await _getAllSockets()
    console.log(`Sockets: (count: ${sockets.length}):`)
    sockets.forEach(_printSocket)
}

function _printSocket(socket) {
    console.log(`Socket - socketId: ${socket.id} userId: ${socket.userId}`)
}

module.exports = {
    connectSockets,
    emitTo,
    emitToUser,
    broadcast,
}
