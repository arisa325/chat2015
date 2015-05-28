// 退室
$(function(){

  $("#js_exit").click(function() {
    //　exitイベントを送信
    var userName = $("#userName").val();
    socket.emit('exit', userName);
    location.href = "/";
  });

    //　exitイベントを送信
    var socket = io.connect();
    socket.on('exit', function(data) {
        $("#chatList").prepend(data + "さんが退室しました。<br />");
    });
})
