import express from 'express'
import {
    createPost,
    getPosts,
    getPost
} from '../controller/post-controller.js';

import { createCategory, getCategories, getCategory } from "../controller/category-controller.js"



const router = express.Router();

// create post
router.post('/create_post', createPost)

// Get posts
router.get('/get_posts', getPosts)
router.get('/get_posts/:id', getPost)


// create categories
router.post('/create_category', createCategory)
router.get('/get_categories', getCategories)
router.get('/get_category/:id', getCategory)



export default router