var express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    server = app.listen(5000)
    // Schema = mongoose.Schema;
// mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + './client/static'));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');


require('./server/config/mongoose.js');

require('./server/config/routes.js')(app)
// Since require('.....') is a function, I just automatically call it






// SOCKET STUFF BELOW

// var io = require('socket.io').listen(server)
// io.sockets.on('connection', function (socket) {
//   socket.on('button_clicked', function (data) {
//     //  EMIT:
//     socket.emit('my_emit_event');
//     //  BROADCAST:
//     socket.broadcast.emit("my_broadcast_event");
//     //  FULL BROADCAST:
//     io.emit("my_full_broadcast_event");
// })
//
// })
