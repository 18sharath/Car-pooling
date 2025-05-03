import tripmodel from '../models/TripModel.js';

export  const createDriver = async (req, res) => {
  try {
    
    const driver = new tripmodel(req.body);
    await driver.save();
    res.status(201).json(driver);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getDrivers = async (req, res) => {
  const drivers = await tripmodel.find();
  res.json(drivers);
};




