import User from "../../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
// import bcryptjs from 'bcryptjs';
// import { errorHandler } from "../../utils/error.js";


// export const signin = async (req, res, next) => {
//     const { email, password } = req.body;
//     try {
//         const validUser = await User.findOne({ email });
//         if (!validUser) {
//             return next(errorHandler(404, 'User not found!'))
//         }

//         const validUserPassword = bcryptjs.compareSync(password, validUser.password);
//         if (!validUserPassword) {
//             return next(errorHandler(401, 'Wrong password!'))
//         }

//         const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, { expiresIn : "12h"});
//         const { password: pass, ...rest } = validUser._doc;
//         res
//             .cookie('access_token', token, { httpOnly: true })
//             .status(200)
//             .json(rest);
//     } catch (error) {
//         next(error)
//     }
// }








// export const signin = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findOne({ email });
    
//         if (!user) {
//           return res.status(401).json({ error: 'Invalid email or Password' });
//         }
    
//         const isPasswordValid = await bcrypt.compare(password, user.password);
    
//         if (!isPasswordValid) {
//           return res.status(401).json({ error: 'Invalid username or Password' });
//         }
    
//         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "12h" });
//         const { password: pass, ...rest } = user._doc;
//         res
//           .cookie('access_token', token, { httpOnly: true })
//           .status(200)
//           .json(rest);
//       } catch (error) {
//         res.status(500).json({ error: 'Login failed' });
//       }
// }









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









// export const signin = (req, res) => {
//     console.log(req.body);
//     const { email, password } = req.body;
    
//     try {
//         User.findOne({ email: email }, async (err, result) => {
//             if (result) {
//               const userPassword = result.password;
//               const checkPassword = await bcryptjs.compare(password, userPassword);
//               console.log(checkPassword);
//               if (checkPassword) {
//                   const token = jwt.sign({
//                     _id : result._id,
//                     email : result.email,
//                 },process.env.JWT_SECRET,{ expiresIn : "12h"})
        
//                 res.json({
//                   alert : "success",
//                   message : "Successfully Login",
//                   token  : token
//                 })
//               }
//               else{
//                 res.send({alert : "error", message : "Check you email and password"});
//               }
//             } else {
//               res.send({alert : "error", message : "This email id not available in database"});
//             }
//           });
//     } catch (error) {
//         console.error("Sign-in error:", error);
//         return res.status(500).json({ alert: "error", message: "Internal server error" });
//     }

//   };
  
  