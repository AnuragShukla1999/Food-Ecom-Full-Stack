import User from "../../models/userModel.js";
// import bcryptjs from 'bcryptjs';
// import jwt from 'jsonwebtoken';


export const signup = async (req, res) => {
    console.log(req.body);
    try {
        const { email, password, confirmPassword } = req.body;

        // const alreadyUser = await User.findOne({ email });

        // if (!alreadyUser) {
        //     return res.status(400).json({ message: 'Email already exists. Please use a different email.' });
        // }

        const newUser = new User({ email, password, confirmPassword });
        await newUser.save();
        res.status(201).json("user created successfully");

    } catch (error) {
        res.status(500).json({ message: error })
    }
}