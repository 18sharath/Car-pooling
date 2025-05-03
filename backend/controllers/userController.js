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
    const newUser=new usermodel({
      name=name,
      password=hashedpassword,
      email=email,

    })
    const user=await newUser.save();
    const token=

  }
}
