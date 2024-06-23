import { Router } from "express";
import { postComments } from "../controllers/comment.controller.js";

export const commentRouter = Router();

commentRouter.post('/comment', postComments);


