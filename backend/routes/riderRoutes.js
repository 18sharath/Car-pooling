import express from 'express';
import { createRider, getRiders } from '../controllers/riderController.js';
const router = express.Router();

router.post('/', createRider);
router.get('/', getRiders);

export default router;
