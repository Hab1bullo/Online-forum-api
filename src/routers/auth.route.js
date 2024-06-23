import { Router } from "express";
import { getAllUsers, loginUser, postUser } from "../controllers/auth.controller.js";

export const authRouter = Router();


authRouter.post('/user', postUser);
authRouter.post('/login', loginUser);
authRouter.get('/users', getAllUsers);