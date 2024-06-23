import { Router } from "express";
import { deleteOneUser, getAllUsers, loginUser, postUser, putOneUser } from "../controllers/auth.controller.js";

export const authRouter = Router();


authRouter.post('/user', postUser);
authRouter.post('/login', loginUser);
authRouter.get('/users', getAllUsers);
authRouter.put('/user/:id', putOneUser);
authRouter.delete('/user/:id', deleteOneUser);