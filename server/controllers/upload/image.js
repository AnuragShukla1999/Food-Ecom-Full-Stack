import fs from 'fs';

export const uploadImage = (req, res) => {
    res.send(JSON.stringify({ 
        fileName : req.file.fileName,
        message : "Upload Successfully..."
     }))
}

export const getUploadImage = (req, res) => {
    const image = path.join(__dirname, "../../", "uploads", req.params.fileName);
    res.sendFile(image);
}