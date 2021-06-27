const mongoose = require('mongoose');

const { Schema } = mongoose;

const imageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  url: {
    type: String,
    required: true,
    unique: true,
  },
}, {
  // Mongoose will create a "createdAt" and "updatedAt" properties to schema 😀
  timestamps: true,
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
