var fs = require('fs');
var http = require('http');
var path = require('path');
var paths = process.cwd().split(path.sep);
var settings = require(path.join(path.sep, paths[1], paths[2], paths[3], 'setting.js'));

var server = require.main.exports.server;

var io = require('socket.io').listen(server);

// 接続
io.sockets.on('connection', function(socket) {

    // 入室送信
    console.log("ok");
    var query = require.main.exports.query;
    socket.broadcast.emit('enter', query.userName);

    // 投稿送信
    socket.on('write', function(data) {
        io.sockets.emit('write', data);
    });

    // メモ送信
    socket.on('memo', function(data) {
        socket.emit('memo', data);
    });

    //退室送信
    socket.on('exit', function(data) {
        socket.broadcast.emit('exit', data);
    });
});