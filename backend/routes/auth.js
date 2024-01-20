import { Router } from "express";

import authController from "../controllers/authControllers.js";
import AuthMiddleware from "../middlewares/authMiddleware.js";

const { registerUser, loginUser, logoutUser, verifyEmail, refreshToken } = authController
const { authenticateToken } = AuthMiddleware

const authRouter = Router();

authRouter.post('/register', registerUser)
authRouter.get('/verify-email/:token', verifyEmail)
authRouter.post('/login', loginUser)
authRouter.post('/refresh-token', authenticateToken, refreshToken)
authRouter.post('/logout', authenticateToken, logoutUser)


export { authRouter };

