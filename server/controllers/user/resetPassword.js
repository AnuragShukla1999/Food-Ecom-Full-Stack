import User from "../../models/userModel.js";
import bcrypt from 'bcrypt';


export const resetPassword = async (req, res) => {
    const { newPassword, confirmPassword, _id } = req.body;
    try {
        if (newPassword === confirmPassword) {
            const hash = await bcrypt.hash(newPassword, saltRounds);
            console.log(req.body);
            User.findOne({ _id: _id }, async (err, results) => {
                if (!err) {
                    User.updateOne({ _id: id }, {
                        $set: { password: hash }
                    })

                    res.json({
                        message: "Password update successfully...!",
                        error: false
                    })
                }
            })
        } else {
            res.json({
                message: "new Password and Confirm password same",
                error: true
            })
        }
    } catch (error) {
        res.json({
            error: true,
            message: err
        })
    }
}