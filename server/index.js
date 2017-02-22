'use latest';
const io = require('socket.io')();

io.on('connection', function(client){});
io.listen(3000);

console.log("server listening at: 3000");
