var app = require("express")();
var http = require("http").Server(app);
var fs = require("fs");
var io = require("socket.io")(http);

app.get("/",function(req,res){
  fs.readFile("main.html","utf8",function(error,data){
    res.send(data);
  });
});

http.listen(3000,function(){
  console.log("server up!");
});

io.on("connection", function(socket){
  console.log("user connected");
  socket.on("disconnect", function(){
    console.log("user disconnected");
  });
  socket.on("chat message", function(data){
    console.log("a user(" + socket.id + ") in room(" + data.roomname + ")says:" + data.msg);
    socket.to(data.roomname).emit("chat message", data);
  });
  socket.on("joinroom",function(roomname){
    socket.join(roomname);
    console.log("joined room " + roomname);
  });
});