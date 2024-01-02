import express from 'express';
import { signup } from '../controllers/user/signupUserController.js';
import { signin } from '../controllers/user/signinUserController.js';
import { forgotPassword } from '../controllers/user/forgotPassword.js';
import { updateUser } from '../controllers/user/updateUser.js';
import { deleteCartItem } from '../controllers/user/deleteCartItem.js';
import { userDetails } from '../controllers/user/userDetails.js';
import { resetPassword } from '../controllers/user/resetPassword.js';
import { auth } from '../middleware/auth.js';


const userRouter = express.Router();

userRouter.post('/signup', signup);
userRouter.post('/signin', signin);
userRouter.post('/forgotpassword', forgotPassword);
userRouter.put("/update", updateUser);
userRouter.delete('/deleteCartItem', deleteCartItem);


const debugMiddleware = (req, res, next) => {
    console.log('User details:', req.user);
    next();
  };

// token is available
userRouter.get('/userDetails', auth,  userDetails);
userRouter.put('/reset-password', resetPassword);

export default userRouter;