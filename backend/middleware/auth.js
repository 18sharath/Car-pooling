import jwt from 'jsonwebtoken'
import usermodel from '../models/UserModel.js';

const JWT_SECRET = process.env.jwt_secret || 'your-secret-key'; // Should be in .env file


const auth = async (req, res, next) => {
  try {
    // Get token from header
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ message: 'No authentication token, access denied' });
    }
    
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);
    
    // Find user by id
    const user = await usermodel.findById(decoded.id).select('-password');
    if (!user) {
      return res.status(401).json({ message: 'Token is valid but user no longer exists' });
    }
    
    // Set user in request
    req.user = user;
    req.user.id = user._id; // For convenience
    
    next();
  } catch (error) {
    console.error('Auth middleware error:', error);
    res.status(401).json({ message: 'Invalid token, authorization denied' });
  }
};

export  default auth;