import mongoose from 'mongoose';

const driverSchema = new mongoose.Schema({
  name: String,
  carNumber: String,
  seatsAvailable: Number,
  phone: String,
  date: Date
});

export default mongoose.model('Driver', driverSchema);
