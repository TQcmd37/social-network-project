import express from 'express';
import usersRoutes from './routes/users.routes.js';
import cors from 'cors';


const app = express();

const port = 3000;

app.use(express.json())

app.use(cors({
  origin: 'http://localhost:5173'
}))

app.use('/auth', usersRoutes)

app.listen(port, () => {
  console.log(`El servidor está corriendo en el puerto: ${port}`);
});