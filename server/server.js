import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";
import { Server } from "socket.io";
import messageRouter from "./routes/messageRoutes.js";
import { Inngest } from "inngest";
import {serve} from "inngest/express"
import { helloWorld } from "./inngest/hello.js";




export const inngest = new Inngest({
  id: "my-test-app",
  name: "My Test",
});





//create express app and HTTP server
const app = express()
const server = http.createServer(app)

//initialize socket.io server
export const io = new Server(server,{
    cors: {origin: "*"}
})

//store online users
export const userSocketMap = {}

//socket.io connection handler
io.on('connection', (socket) => {
    // console.log("⚡ Socket connected:", socket.id);
//   console.log("Query received:", socket.handshake.query);
    const userId = socket.handshake.query.userId
    console.log('User connected', userId)

    if(userId) userSocketMap[userId] = socket.id;

    //emit online users to all connected clients
    io.emit('getOnlineUsers', Object.keys(userSocketMap))
    // console.log(`✅ User ${userId} connected with socket ${socket.id}`);

    socket.on('disconnect', () =>{
        console.log(`User ${userId} disconnected`);
        delete userSocketMap[userId]
        io.emit('getOnlineUsers', Object.keys(userSocketMap))
    })
})

//middleware setup
app.use(express.json({limit: "4mb"}))
app.use(cors())

//routes setup
app.use("/api/status", (_, res) => res.send('server is live'))
app.use('/api/auth', userRouter)
app.use('/api/messages', messageRouter)


//inngest
app.use(
  "/api/inngest",
  serve({
    client: inngest,
    functions: [helloWorld],
  })
);


//connect to mongodb
await connectDB()

if(process.env.NODE_ENV !== "production"){
    const PORT = process.env.PORT || 7000
    server.listen(PORT, () => console.log('Server is running on PORT:' + PORT))
}

//export server for vercel
export default server