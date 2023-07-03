var express = require('express');
var router = express.Router();

const { handleFileUpload } = require('../controller/fileController');
const { upload } = require('../middleware/fileUpload');


router.get('/', function(req, res, next) {
    console.log('middleware fun');
    res.send("Hello World!");
    next();
});

router.get('/health', async(req, res, next) => {
    const healthCheck = {
        message: 'OK',
        timestamp: Date()
    };
    try {
        res.status(200).send(healthCheck);
    }
    catch (error) {
        healthCheck.message = error;
        res.status(503).send();
    }
});

router.post('/upload', upload.single('file'), handleFileUpload);

module.exports = router;