const express = require('express');
const mongoose = require('mongoose');

// Load environment variables
require('dotenv').config();

// Initiate express app
const app = express();

mongoose.connect(process.env.REMOTE_DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const imagesRoutes = require('./api/v1/routes/images');

// Middleware
app.use(express.json())


app.use('/api/v1/images', imagesRoutes);

app.listen(
    process.env.PORT,
    () => console.log(`dis working ( http://localhost:${process.env.PORT} )`)
);
