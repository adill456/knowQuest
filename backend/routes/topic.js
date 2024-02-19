import { Router } from "express";

import { SubtopicController, TopicController } from "../controllers/topicController.js";
import AuthMiddleware from "../middlewares/authMiddleware.js";

const { getTopics } = TopicController
const { getSubtopics } = SubtopicController

const { authenticateToken } = AuthMiddleware

const topicRouter = Router();

topicRouter.get('', authenticateToken, getTopics)
topicRouter.get('/:id/subtopics', authenticateToken, getSubtopics)

export { topicRouter };

