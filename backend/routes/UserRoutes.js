import express from 'express';
import userController from '../controllers/userController.js';
import auth from '../middleware/auth.js';
// import {login,registerUser,updateProfile,getProfile,toggleButton,completeProfile } from '../controllers/userController.js'
const router = express.Router();

const {
    login,
    registerUser,
    updateProfile,
    getProfile,
    toggleButton,
    completeProfile
  } = userController;
// Public routes
router.post('/register', registerUser);
router.post('/login', login);

console.log({
    login,
    registerUser,
    updateProfile,
    getProfile,
    completeProfile,
    toggleButton,
    userController
  });
// Protected routes
router.post('/complete-profile', auth, completeProfile);
router.get('/profile', auth, getProfile );
router.put('/profile', auth, updateProfile);





export default router;
