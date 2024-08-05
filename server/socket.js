const io = require('socket.io')(server); // Assuming 'server' is your HTTP server

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('message', (msg) => {
        console.log('Message received:', msg);
        socket.broadcast.emit('message', msg); // Send to all other clients
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});
