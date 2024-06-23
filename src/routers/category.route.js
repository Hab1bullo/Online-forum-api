import { Router } from "express";
import { deleteOne, getAll, getone, postCaregory, updateOne } from "../controllers/category.controller.js";

export const categoryRouter = Router();


categoryRouter.post('/category', postCaregory);
categoryRouter.get('/category/:id', getone);
categoryRouter.get('/category', getAll);
categoryRouter.put('/category/:id', updateOne);
categoryRouter.delete('/category/:id', deleteOne);
