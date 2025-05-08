import express from 'express';

import auth from '../middleware/auth.js';
import {login,registerUser,updateProfile,getProfile,toggleButton,completeProfile } from '../controllers/userController.js'
const router = express.Router();

// Public routes
router.post('/register', registerUser);
router.post('/login', login);

// Protected routes
router.post('/complete-profile', auth, completeProfile);
router.get('/profile', auth, getProfile );
router.put('/profile', auth, updateProfile);





export default router;
