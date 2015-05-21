// 投稿
$(function(){

  $("#js_write").click(function() {
    //　writeイベントを送信
    var inputMsg = $("#userName").val() + 'さん：' + $("#inputMsg").val();
    socket.emit('write', inputMsg);
    $("#inputMsg").val('');
  });

    //　writeイベントを送信
    var socket = io.connect();
    socket.on('write', function(data) {
        $("#chatList").prepend(data + "<br />");
    });

})