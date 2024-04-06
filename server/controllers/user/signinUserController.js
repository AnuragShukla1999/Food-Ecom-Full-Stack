import User from "../../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


export const signin = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ error: 'Invalid email or Password' });
      }
  
      const isPasswordValid = bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid username or Password' });
      }
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '12h' });
      res.cookie('access_token', token, { httpOnly: true }).status(200).json({ message: 'Successfully logged in', token });
      // console.log(token);
    } catch (error) {
      console.error('Login failed:', error);
      res.status(500).json({ error: 'Login failed' });
    }
  };

