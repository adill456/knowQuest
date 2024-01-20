import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { sendMail } from "../config/sendMail.js";
import { BlacklistToken } from "../models/blacklist.js";
import { User } from "../models/user.js";

class authController {
    async verifyEmail(req, res) {
        try {
            const { token } = req.params
            const { id } = jwt.verify(token, process.env.SECRET_KEY)
            const user = await User.findOne({ where: { id } })
            if (!user) {
                return res.status(400).json({ success: false, message: "User not found" })
            }
            await User.update({ verified: true, verified_at: new Date() }, { where: { id } })
            res.send("Email is verified successfully, You can login now");
        }
        catch (error) {
            res.status(500).json(error)
        }
    }
    async registerUser(req, res) {
        try {
            const { first_name, last_name, email, password, phone, role } = req.body
            const salt = await bcrypt.genSalt(12)
            const hashPassword = await bcrypt.hash(password, salt)
            const existedUser = await User.findOne({ where: { email } })
            if (existedUser) {
                return res.status(400).json({ success: false, message: "Email already existed" })
            }
            const user = await User.create({
                first_name,
                last_name,
                email,
                password: hashPassword,
                phone,
                role
            })
            const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '5m' });
            const verificationLink = `${process.env.CLIENT_URL}/api/auth/verify-email/${token}`

            await sendMail
                (email, verificationLink)

            res.status(200).json({ success: true, message: "An email is sent to your mail, please verify your email" })
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async loginUser(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ where: { email } });

            if (!user) {
                return res.status(400).json({ success: false, message: 'User not found' });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({ success: false, message: 'Incorrect password' });
            }

            const verifiedUser = await User.findOne({ where: { email, verified: true } });
            if (!verifiedUser) {
                return res.status(400).json({ success: false, message: 'Please verify your email' });
            }

            const accessToken = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '5m' });

            const refreshToken = jwt.sign({ id: user.id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' });

            res.status(200).json({ success: true, message: 'Login successful', accessToken, refreshToken });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }

    async refreshToken(req, res) {
        const { refreshToken } = req.body
        if (!refreshToken) {
            return res.status(400).json({ success: false, message: "Refresh token not found" })
        }
        const isBlacklisted = await BlacklistToken.findOne({ where: { token: refreshToken } })
        if (isBlacklisted) {
            return res.status(400).json({ success: false, message: "Refresh token is blacklisted" })
        }
        try {
            const { id } = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
            const accessToken = jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: '5m' })
            res.status(200).json({ success: true, message: "Refresh token is valid", accessToken })
        } catch (error) {
            console.error("Error during refresh token:", error)
            res.status(500).json({ success: false, message: "Internal Server Error" })
        }
    }

    async logoutUser(req, res) {
        try {
            const { refreshToken } = req.body;

            if (!refreshToken) {
                return res.status(400).json({ success: false, message: 'Refresh token not found' });
            }
            await BlacklistToken.create({ token: refreshToken, expired_at: new Date() });

            res.status(200).json({ success: true, message: 'Logout successful' });
        } catch (error) {
            console.error('Error during logout:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }
}


export default new authController()