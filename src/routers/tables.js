import { Router } from "express";
import { createTables } from "../services/create-tables.js";

export const tableRouter = Router();


tableRouter.get('/tables', createTables);