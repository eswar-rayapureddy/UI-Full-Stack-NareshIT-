var socket = io('localhost:3000');

var sendMsg = () => {
    var msg = $("#userText").val();
    $("#userText").val('');
    renderMsg(msg, 'send');

    socket.emit("userSendMsg", msg);

    socket.on("receiveUsermsg", (data) => {
        console.log("received msg " + data);
        renderMsg(data, 'receive');
    });
}

var renderMsg = (msg, type) => {
    var classname = (type == 'send') ? 'sendMsg' : 'receiveMsg';
    var divTag = $("<div/>").addClass(classname).text(msg)
    $(".msgBlock").append(divTag)
}