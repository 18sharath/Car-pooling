import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: String,
  role: { type: String, enum: ["driver", "passenger"], default: "passenger" },
  joinedAt: { type: Date, default: Date.now },
<<<<<<< HEAD
  Adaarnumber: {
    type: Number,
  },
=======
  Adaarnumber:{
    type:Number,
    
  }
>>>>>>> 1853bdb5f896ecd13b8c5f76ae815703111db72e
});

const usermodel = mongoose.models.User || mongoose.model("User", UserSchema);
export default usermodel;
