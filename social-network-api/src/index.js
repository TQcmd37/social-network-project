import express from 'express';
import usersRoutes from './routes/users.routes.js';
import postRoutes from './routes/posts.routes.js'
import cors from 'cors'
import { Server } from 'socket.io';
import http from 'node:http'


const app = express();
app.use(cors({
  origin: "*" /* 'http://localhost:5173' */
}))

const httpServer = http.createServer(app)

// Create global chat
const io = new Server(httpServer, {
  cors: { 
    origin: "*"
  }
})


io.on('connection', (socket)=>{
  console.log(`Un usuario conectado ${socket.id}`)
})

const port = 3000;

app.use(express.json())


app.use('/auth', usersRoutes)

app.use('/api', postRoutes)

httpServer.listen(port, () => {
  console.log(`El servidor está corriendo en el puerto: ${port}`);
});