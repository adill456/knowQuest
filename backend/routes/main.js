import { Router } from "express";

import { authRouter } from "./auth.js";
import { userRouter } from "./user.js";

const mainRouter = Router();

mainRouter.use('/auth', authRouter);
mainRouter.use('/user', userRouter);

export { mainRouter };

