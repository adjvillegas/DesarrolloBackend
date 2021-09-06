"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var moment_1 = __importDefault(require("moment"));
var producto = [];
var mensajes = [];
var app = (0, express_1.default)();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var PORT = 8080;
app.use(express_1.default.static('./public'));
app.get('/', function (req, res) {
    res.send('index.html');
});
app.get('/producto', function (req, res) {
    res.json(producto);
});
app.get('/mensajes', function (req, res) {
    res.json(mensajes);
});
io.on('connection', function (socket) {
    socket.emit('welcome', { producto: producto });
    socket.emit('message', { mensajes: mensajes });
    socket.on('submit', function (data) {
        producto.push({ title: data.title, price: data.price, id: socket.id });
        io.emit("visualizar", { producto: producto });
    });
    socket.on('msgClick', function (data) {
        var msg = { email: data.email, text: data.text, fecha: (0, moment_1.default)().format('DD/MM/YYYY HH:mm'), id: socket.id };
        io.emit("user_msg", msg);
        mensajes.push({ email: data.email,
            fecha: (0, moment_1.default)().format('DD/MM/YYYY HH:mm'),
            mensaje: data.text,
            id: socket.id });
    });
});
http.listen(PORT, function () {
    console.log("Server iniciado en http://localhost:" + PORT + "/");
});
