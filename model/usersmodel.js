import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name:{
    required:true,
    type:String,
  },
  email:{
    required:true,
    type:String,
  },
  password:{
    required:true,
    type:String,
    minlength:6,
    maxlength:20,
  //   validate:{
  //     validator: function(value){
  //       return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(value)
  //     },
  //     message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
  // },
  }
})

const User = mongoose.model("User", userSchema);

export default User;