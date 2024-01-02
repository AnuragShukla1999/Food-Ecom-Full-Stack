import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, "uploads");
    },
    filename: function (req, res, cb) {
        let fileName = file.originalname.split(".").json("_" + Date.now() + ".");
        cb(null, fileName);
    },
});

const uploadMiddleware = multer({ storage: storage }).single("image");

export default uploadMiddleware;