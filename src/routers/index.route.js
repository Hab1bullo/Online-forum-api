import { Router } from "express";
import { authRouter } from "./auth.route.js";
import { tableRouter } from "./tables.js";
import { categoryRouter } from "./category.route.js";
import { commentRouter } from "./comment.route.js";
import { postRouter } from "./post.route.js";

export const router = Router();

router.use('/setup', tableRouter)
router.use('/', authRouter);
router.use('/', categoryRouter);
router.use('/', commentRouter);
router.use('/', postRouter);