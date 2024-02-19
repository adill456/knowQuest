import { SubTopic } from "../models/subTopic.js";
import { Topic } from "../models/topic.js";

class TopicControllerClass {
    async getTopics(_, res) {
        try {
            const topics = await Topic.findAll();
            res.status(200).json({
                success: true,
                topics,
            });
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

class SubtopicControllerClass {
    async getSubtopics(req, res) {
        try {
            const topicId = req.params.id;
            const subtopics = await SubTopic.findAll({
                where: { topic_id: topicId },
            })
            if (!subtopics) {
                return res.status(404).json({
                    success: false,
                    message: 'Subtopics not found',
                });
            }
            res.status(200).json({
                success: true,
                subtopics,
            });
        } catch (error) {
            res.status(500).json(error);
        }
    }
}


export const SubtopicController = new SubtopicControllerClass();
export const TopicController = new TopicControllerClass();