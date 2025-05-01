import mongoose from 'mongoose';

const riderSchema = new mongoose.Schema({
  name: String,
  destination: String,
  phone: String,
  date: Date
});

export default mongoose.model('Rider', riderSchema);
