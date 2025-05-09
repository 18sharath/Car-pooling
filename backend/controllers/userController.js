import usermodel from '../models/UserModel.js';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

const createToken=(id)=>{
  return jwt.sign({id},process.env.jwt_secret);
}



const registerUser =async(req,res)=>{
  const {name,email,password} =req.body;
  try{
    const exists=await usermodel.findOne({email});
    if(exists)
    {
      
        return res.json({success:false,message:"user is already exists"})
    }
    
    // validating email format  and strong password
    if(!validator.isEmail(email))
    {
        return res.json({success:false,message:"please enter a valid email"})

    }
    if(password.length<8)
    {
        return res.json({success:false,message:"password length should be above 8"})
    }

    // hashing my password
    const salt=await bcrypt.genSalt(10);
    const hashedpassword=await bcrypt.hash(password,salt);

    // create a new user 
    const newUser=new usermodel({
      name:name,
      password:hashedpassword,
      email:email,

    })
    const user=await newUser.save();
    const token=createToken(user._id);
    res.json({success:true,token,isProfileComplete:false,userId:newUser._id});

  }

  catch(error)
  {
    console.log(error);
    res.json({success:false, message:"Error"});
  }
}

const login=async (req,res)=>{
  const {email,password}=req.body;
  try{
      const user=await usermodel.findOne({email});
      if(!user)
      {
        return res.json({success:false,message:"user doesn't exist"});

      }
    
        const isMatch=await bcrypt.compare(password,user.password)
        if (!isMatch) {
            return res.json({success:false,message:"Invalid credentials"})
        }
        const token=createToken(user._id)

        const isProfileComplete = Boolean(user.name && user.phone && user.role && user.Adaarnumber);
    
        res.json({success:true,token,isProfileComplete})
    }
    
    
    catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})
        
    }

  }

  const toggleButton= async (req,res)=>{
    try{
      const userId=req.user.id;
      const user=await usermodel.findById(userId);
      const newRole = user.role === 'driver' ? 'passenger' : 'driver';

      const updatedUser=await usermodel.findByIdAndUpdate(
        userId,
        {role:newRole},
        {new:true}
      ).select('-password');
    
    res.status(200).json({
      message: `You are now a ${newRole}`,
      user: updatedUser
    });
  }
  catch (error) {
    console.error('Toggle role error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }  
    
  }

  const completeProfile = async (req, res) => {
    try {
      const { name, phone, role, Adaarnumber } = req.body;
      const userId = req.user.id; // From auth middleware
      
      // Validate Aadhar number
      if (!Adaarnumber || String(Adaarnumber).length !== 12) {
        return res.status(400).json({ message: 'Valid Aadhar number is required (12 digits)' });
      }
      
      // Check if role is valid
      if (role && !['driver', 'passenger'].includes(role)) {
        return res.status(400).json({ message: 'Role must be either driver or passenger' });
      }
      
      // Update user profile
      const updatedUser = await usermodel.findByIdAndUpdate(
        userId,
        {
          name,
          phone,
          role,
          Adaarnumber
        },
        { new: true, runValidators: true }
      ).select('-password');
      
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      
      res.status(200).json({
        message: 'Profile completed successfully',
        user: updatedUser
      });
      
    } catch (error) {
      console.error('Complete profile error:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };


  const getProfile = async (req, res) => {
    try {
      const userId = req.user.id; // From auth middleware
      
      const user = await usermodel.findById(userId).select('-password');
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      
      // Check if profile is complete
      const isProfileComplete = Boolean(user.name && user.phone && user.role && user.Adaarnumber);
      
      res.status(200).json({
        user,
        isProfileComplete
      });
      
    } catch (error) {
      console.error('Get profile error:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
  const updateProfile = async (req, res) => {
    try {
      const userId = req.user.id; // From auth middleware
      const { name, phone, role, Adaarnumber } = req.body;
      
      // Find user first to check if it exists
      const user = await usermodel.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      
      // Create update object with only provided fields
      const updateData = {};
      if (name) updateData.name = name;
      if (phone) updateData.phone = phone;
      if (role && ['driver', 'passenger'].includes(role)) updateData.role = role;
      if (Adaarnumber && String(Adaarnumber).length === 12) updateData.Adaarnumber = Adaarnumber;
      
      // Update user
      const updatedUser = await usermodel.findByIdAndUpdate(
        userId,
        updateData,
        { new: true, runValidators: true }
      ).select('-password');
      
      res.status(200).json({
        message: 'Profile updated successfully',
        user: updatedUser
      });
      
    } catch (error) {
      console.error('Update profile error:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };


export  {registerUser,login,completeProfile,toggleButton,getProfile,updateProfile};

