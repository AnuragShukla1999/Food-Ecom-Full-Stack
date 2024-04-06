import User from "../../models/userModel.js"

// export const userDetails = async (req, res) => {
//     try {
//         // console.log("req", req);
//         // console.log('req.user:', req.user);
//         console.log('req.email:', req.user.data.email);
//         if (!req.user || !req.user.email) {
//             return res.status(400).json({ message: 'User not authenticated' });
//         }

//         User.findOne({ email: req.user.email }, async (err, result) => {
//             if (err || !result) {
//                 return res.status(404).json({ alert: 'error', message: 'User not found' });
//             }

//             res.json({
//                 alert: 'success',
//                 message: 'Successfully logged in',
//                 data: {
//                     firstName: result.firstName,
//                     lastName: result.email,
//                     email: result.email,
//                     image: result.image,
//                     cartItem: result.cartItem,
//                     _id: result._id,
//                 }
//             });
//         });
//     } catch (error) {
//         console.error('Internal Server Error:', error);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// };




export const userDetails = async (req, res) => {
    try {
        const user = await User.findOne({ email: 'lovesingh@gmail.com' });
        // console.log(user)
        if (!user) {
            console.log('User not found');
            return res.status(404).json({ alert: 'error', message: 'User not found' });
        }

        res.json({
            alert: 'success',
            message: 'Successfully logged in',
            data: {
                firstName: user.firstName,
                lastName: user.email,
                email: user.email,
                image: user.image,
                cartItem: user.cartItem,
                _id: user._id,
            }
        });
    } catch (error) {
        console.error('Error in userDetails:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};