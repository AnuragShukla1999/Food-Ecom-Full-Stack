import express from 'express';

import uploadMiddleware from '../middleware/uploadFile.js';
import { getUploadImage, uploadImage } from '../controllers/upload/image.js';

const routerUpload = express.Router();


routerUpload.post('/image', uploadMiddleware, uploadImage);
routerUpload.get('/image/:fileName', getUploadImage);


export default routerUpload;