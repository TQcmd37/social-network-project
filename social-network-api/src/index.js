import express from 'express';
import usersRoutes from './routes/users.routes.js';
import postRoutes from './routes/posts.routes.js'


const app = express();

const port = 3000;

app.use(express.json())

app.use('/auth', usersRoutes)

app.use('/api', postRoutes)

app.listen(port, () => {
  console.log(`El servidor está corriendo en el puerto: ${port}`);
});