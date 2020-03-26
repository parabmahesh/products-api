import mongoose from 'mongoose';

const { Schema, Types } = mongoose;
const supplierSchema = new Schema({
  id: { type: Types.ObjectId },
  companyName: { type: String },
  contactName: { type: String },
  contactTitle: { type: String },
  mobile: { type: Number },
  address: {
    street1: { type: String },
    street2: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: Number },
    country: { type: String },
  }
});

const Supplier = mongoose.model('Supplier', supplierSchema);
export default Supplier;
