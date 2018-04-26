const express=require('express');
const app=express();

const http=require('http').Server(app)
const io=require('socket.io')(http);

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

io.on('connection',(socket)=>{
    console.log('socket connecté');

    socket.on('messageChat',(data)=>{
        console.log(data);
        io.emit('sendMessage',data);
    })

    socket.on('disconnect',()=>{
        console.log("not connected");
    })
})


http.listen(8080);