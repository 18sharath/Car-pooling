import User from '../models/UserModel.js';

export const createRider = async (req, res) => {
  try {
    const rider = new User()
    (req.body);
    await rider.save();
    res.status(201).json(rider);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getRiders = async (req, res) => {
  const riders = await User.find();
  res.json(riders);
};
