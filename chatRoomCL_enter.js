// 入室
$(function(){
    var socket = io.connect();
    // enterイベントを受信
    socket.on('enter', function (data) {
        $("#chatList").prepend(data + "さんが入室しました。<br />");
    });
});
