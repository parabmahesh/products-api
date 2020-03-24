import mongoose from 'mongoose';

const { Schema } = mongoose;
const bookSchema = new Schema({
  title: { type: String },
  author: { type: String },
  price: { type: Number }
});

const bookModel = mongoose.model('Book', bookSchema);
export default bookModel;
