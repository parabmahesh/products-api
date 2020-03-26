import mongoose from 'mongoose';

const { Schema, Types } = mongoose;
const productSchema = new Schema({
  id: { type: Types.ObjectId },
  name: { type: String },
  description: { type: String },
  price: { type: String },
  categoryId: { type: Types.ObjectId },
  supplierId: { type: Types.ObjectId },
  isAvailable: { type: String },
});

const Product = mongoose.model('Product', productSchema);
export default Product;
