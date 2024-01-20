import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

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
            if (!isAuthorized) {
                return res.status(401).json({ success: false, message: "Not authorized token" });
            }
            next();
        } catch (error) {
            res.status(500).json({ success: false, message: "Internal Server Error" });
        }
    }
}

export default new AuthMiddleware();
