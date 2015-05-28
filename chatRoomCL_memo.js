// メモ
$(function(){

  $("#js_memo").click(function() {
    //　memoイベントを送信
    var inputMsg = $("#userName").val() + 'さんのメモ：' + $("#inputMsg").val();
    socket.emit('memo', inputMsg);
    $("#inputMsg").val('');
  });

    //　memoイベントを送信
    var socket = io.connect();
    socket.on('memo', function(data) {
        $("#chatList").prepend(data + "<br />");
    });

})