var app = require("express")();
var http = require("http").Server(app);
var fs = require("fs");
var io = require("socket.io")(http);
var users = {};
var rooms = {};

app.get("/",function(req,res){
  fs.readFile("main.html","utf8",function(error,data){
    res.send(data);
  });
});



app.get("/userlist",function(req,res){
  res.send(users);
});

//process.env.PORT lets the port be set by Heroku
http.listen(process.env.PORT || 3000,function(){
  console.log("server is up at port:" + process.env.PORT + "!!!");
});

io.on("connection", function(socket){
  console.log("a user connected");
  users[socket.id] = "익명(Anonymous)";
  socket.on("disconnect", function(){
    //use "io".emit when sending to everyone
    io.emit("leftroom", users[socket.id]);
    console.log("user(" + users[socket.id] + " => " + socket.id +") disconnected");
    delete users[socket.id];
  });

  socket.on("chat message", function(data){
    console.log("a user(" + socket.id + ") in room(" + data.roomname + ")says:" + data.msg);
    socket.to(data.roomname).emit("chat message", data);
  });

  socket.on("joinroom",function(data){
    socket.join(data.roomname);
    if(data.userid){
      socket.to(data.roomname).emit("newuser", data);
    }
  });

  socket.on("set_userid",function(data){
    console.log(data.roomname + ": socketid " + socket.id + " set as " + data.userid);
    socket.to(data.roomname).emit("newuser", data);
    users[socket.id] = data.userid;
  });
});