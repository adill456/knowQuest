import { Router } from "express";

import userController from "../controllers/userController.js";

import authMiddleware from "../middlewares/authMiddleware.js";

const userRouter = Router();

const { authenticateToken } = authMiddleware
const { getUser } = userController


userRouter.get('/:id', authenticateToken, getUser)


export { userRouter };
