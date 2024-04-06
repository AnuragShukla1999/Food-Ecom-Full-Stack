import jwt from 'jsonwebtoken';

export const auth = async (req, res, next) => {
    try {
        // console.log(req.headers)
        const token = req.headers.authorization;

        const decode =  jwt.verify(token.split(' ')[1],process.env.JWT_SECRET);
        
        // console.log(decode);

        req.user = decode;

        // console.log(req.user)
        next();

    } catch (error) {
        res.status(401).json({
            error : "Invalid input..."
        });
    }
}