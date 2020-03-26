import mongoose from 'mongoose';

const { Schema, Types } = mongoose;
const categorySchema = new Schema({
  id: { type: Types.ObjectId },
  name: { type: String },
  description: { type: String }
});

const Category = mongoose.model('Category', categorySchema);
export default Category;
