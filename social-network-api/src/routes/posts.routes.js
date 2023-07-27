import { Router } from "express";
import { getPost, createPost, getPosts, deletePost} from '../controllers/posts.controller.js'
const router = Router()

router.get('/posts', getPosts)

router.get('/posts/:id', getPost)

router.post('/posts', createPost)

// router.patch('/posts/:id', u)

router.delete('/posts/:id', deletePost)



export default router