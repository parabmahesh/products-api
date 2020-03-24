import mongoose from 'mongoose';

const { Schema } = mongoose;
const userSchema = new Schema({
  userId: { type: String },
  userName: { type: String },
  password: { type: String },
  dob: { type: Date },
  email: { type: String },
  phone: { type: Number },
  firstName: { type: String },
  lastName: { type: String },
  address: {
    stree1: { type: String },
    stree2: { type: String },
    zip: { type: Number },
    city: { type: String },
    state: { type: String },
    country: { type: String },
  }
});

const User = mongoose.model('User', userSchema);
export default User;
