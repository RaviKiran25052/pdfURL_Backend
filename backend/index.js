const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/files', express.static(path.join(__dirname, 'files')));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./files/");
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {
    console.log(req.body);
    console.log(req.file);

    const fileUrl = `http://localhost:3001/files/${req.file.filename}`;
    res.json({ filePath: fileUrl });  
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
