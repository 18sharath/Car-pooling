import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: String,
  role: { type: String, enum: ['driver', 'passenger'], default: 'passenger' },
  joinedAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', UserSchema);
export default User;
