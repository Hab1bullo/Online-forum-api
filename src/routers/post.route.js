import { Router } from "express";
import { createPost } from "../controllers/post.controller.js";

export const postRouter = Router();

postRouter.post('/post', createPost);