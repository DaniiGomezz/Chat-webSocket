import express from "express"
import { Server as ServerSocket } from "socket.io";
import http from "http";
const app = express()

const server = http.createServer(app)
const io = new ServerSocket(server)

io.on("connection", (socket) => {
    console.log("user connected");
    socket.on("chat", (data) => {
        console.log(data)
    })
})



server.listen(4000)
console.log("server running on port 4000");