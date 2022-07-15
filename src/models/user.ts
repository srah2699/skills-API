import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema  = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  emailId: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: [8, 'password should be atleast 8 characters']
  },
  phone: {
    type: String,
  }
})

userSchema.pre("save", async function(){
  this.password= await bcrypt.hash(this.password, 10)
})

userSchema.methods.isValidatePassword = async function( userSendPassword: string) {
  return await bcrypt.compare(userSendPassword, this.password)
}

const user = mongoose.model('User', userSchema)

export default user;