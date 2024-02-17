import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.js';

dotenv.config();

class AuthMiddleware {
    async authenticateToken(req, res, next) {
        try {
            const authHeader = req.headers['authorization'];
            const token = authHeader && authHeader.split(' ')[1];

            if (!token) {
                return res.status(401).json({ success: false, message: "Token not found" });
            }

            const isAuthorized = jwt.verify(token, process.env.SECRET_KEY);

            next();
        } catch (error) {
            if (error instanceof jwt.JsonWebTokenError) {
                return res.status(401).json({ success: false, message: "Invalid token" });
            }
            if (error instanceof jwt.TokenExpiredError) {
                return res.status(401).json({ success: false, message: "Token expired" });
            }

            console.error(error);
            res.status(500).json({ success: false, message: "Internal Server Error" });
        }
    }

    async authorizeRole(req, res, next) {
        try {
            const { id } = req.params;
            const user = await User.findOne({ where: { id } });

            if (!user) {
                return res.status(400).json({ success: false, message: "User not found" });
            }

            if (user.role !== "instructor") {
                return res.status(401).json({ success: false, message: "You have no permission for this module" });
            }

            next();
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal Server Error" });
        }
    }
}

export default new AuthMiddleware();
