import User from "../../models/userModel.js";


export const signup = async (req, res) => {
    console.log(req.body);
    try {
        const { email, password, confirmPassword } = req.body;

        const newUser = new User({ email, password, confirmPassword });
        await newUser.save();
        res.status(201).json("user created successfully");

    } catch (error) {
        res.status(500).json({ message: error })
    }
}