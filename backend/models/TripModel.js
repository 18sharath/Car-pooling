import mongoose from 'mongoose';


const TripSchema = new mongoose.Schema({
  driver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  image: {
    type: String,
    
},
  from: { type: String, required: true },
  to: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String },
  availableSeats: { type: Number, required: true },
  pricePerSeat: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

const tripmodel=mongoose.models.Trip || mongoose.model('Trip', TripSchema);
export default tripmodel;
