import { User } from "../models/user.js";


class userController {
    async getUser(req, res) {
        try {

            const { id } = req.params;
            const user = await User.findOne({ where: { id } });
            if (!user) {
                return res.status(400).json({ success: false, message: "User not found" })
            }
            res.status(200).json({ success: true, user })
        }
        catch (error) {
            res.status(500).json({ success: false, message: "Internal Server Error" })
        }
    }

    async editUser(req, res) {
        try {
            const { id } = req.params;
            const updatedData = req.body;

            const user = await User.findOne({ where: { id } });
            if (!user) {
                return res.status(400).json({ success: false, message: "User not found" })
            }
            await user.update(updatedData);
            res.status(200).json({ success: true, message: "User is updated successfully" })
        }
        catch (error) {
            res.status(500).json({ success: false, error: error, message: "Internal Server Error", })
        }
    }
}

export default new userController()