import express from 'express';
import { createDriver, getDrivers } from '../controllers/tripController.js';
const router = express.Router();

router.post('/', createDriver);
router.get('/', getDrivers);

export default router;



