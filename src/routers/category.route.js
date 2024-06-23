import { Router } from "express";
import { getone, postCaregory, updateOne } from "../controllers/category.controller.js";

export const categoryRouter = Router();


categoryRouter.post('/category', postCaregory);
categoryRouter.get('/category/:id', getone);
categoryRouter.put('/category/:id', updateOne);
