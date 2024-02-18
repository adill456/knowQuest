import { Router } from "express";

import userController from "../controllers/userController.js";

import authMiddleware from "../middlewares/authMiddleware.js";

const userRouter = Router();

const { authenticateToken } = authMiddleware

const { getUser, editUser } = userController


userRouter.get('/:id', authenticateToken, getUser)
userRouter.put('/:id', authenticateToken, editUser)


export { userRouter };
