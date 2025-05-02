const BookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    trip: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip', required: true },
    seatsBooked: { type: Number, default: 1 },
    bookingTime: { type: Date, default: Date.now },
    status: {
      type: String,
      enum: ['confirmed', 'cancelled', 'completed'],
      default: 'confirmed'
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'paid'],
      default: 'pending'
    }
  });
  
  module.exports = mongoose.model('BookingModel', BookingSchema);
  