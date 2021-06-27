const { Router } = require('express'); 
const { Storage } = require('@google-cloud/storage');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })

const Image = require('../models/Image');

const router = Router();

router.get('/all', (req, res) => {
  Image.find({}, (err, images) => {
    if (err) res.status(500).json({ error: err });
    if (images) {
      res.json({ data: images });
    }
  });
});

router.get('/:name', (req, res) => {
  const { name } = req.params;

  Image.findOne({ filename: name }, (err, image) => {
    if (err) res.status(500).json({ error: err });
    if (image) {
      res.json({ data: image });
    }
  });
});

router.post('/', upload.single('image'), (req, res) => {
  // Upload file to Google Cloud storage
  const storage = new Storage({keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS});
  const bucketName = 'images-aeon';
  console.log(req.file);
  const filePath = `uploads/${req.file.filename}`;
  const destFileName = `${req.file.filename}.jpg`;

  const uploadFile = async () => {
    await storage.bucket(bucketName).upload(filePath, {
      destination: destFileName,
    });

    console.log(`${filePath} uploaded to ${bucketName}`);
  }

  uploadFile().catch(console.error);

  // Get public URL for image
  const pubURL = `https://storage.googleapis.com/images-aeon/${req.file.filename}.jpg`;
  
  // Get other data from req.data
  const { name, description } = req.body;
  // Add entry to database
  const newImage = new Image({
    name,
    filename: `${req.file.filename}.jpg`,
    description,
    url: pubURL,
  });

  newImage.save().then(image => {
    res.json({ status: 'Successfully stored to database and cloud storage' });
  });
});

module.exports = router;
