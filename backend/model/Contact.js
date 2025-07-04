import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: {
    type: Date,
    default: Date.now
  }
});

export const Contact = mongoose.model('Contact', contactSchema);
