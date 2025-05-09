import Trip from '../models/TripModel.js';
import User from '../models/UserModel.js';

// 1. Create a new trip (driver adds a trip)
export const createTrip = async (req, res) => {
  try {
    const trip = new Trip(req.body);
    const savedTrip = await trip.save();
    res.status(201).json(savedTrip);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 2. Get all trips (passenger sees this)
export const getAllTrips = async (req, res) => {
  try {
    const trips = await Trip.find().populate('driver', 'name email');
    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 3. Get one trip by ID
export const getTripById = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id).populate('driver passengers');
    if (!trip) return res.status(404).json({ message: 'Trip not found' });
    res.status(200).json(trip);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 4. Update trip (driver might want to update it)
export const updateTrip = async (req, res) => {
  try {
    const updatedTrip = await Trip.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedTrip);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 5. Delete trip
export const deleteTrip = async (req, res) => {
  try {
    await Trip.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Trip deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 6. Join a ride (passenger joins)
export const joinTrip = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);
    if (!trip) return res.status(404).json({ message: 'Trip not found' });

    if (trip.availableSeats <= 0) {
      return res.status(400).json({ message: 'No seats available' });
    }

    trip.passengers.push(req.body.passengerId);
    trip.availableSeats -= 1;
    await trip.save();

    res.status(200).json({ message: 'Successfully joined the trip', trip });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
