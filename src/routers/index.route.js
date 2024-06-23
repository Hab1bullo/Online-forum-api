import { Router } from "express";
import { authRouter } from "./auth.route.js";
import { tableRouter } from "./tables.js";
import { categoryRouter } from "./category.route.js";

export const router = Router();

router.use('/', authRouter);
router.use('/', categoryRouter);
router.use('/setup', tableRouter)