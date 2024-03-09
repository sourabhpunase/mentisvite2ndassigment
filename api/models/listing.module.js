import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  database: { type: String, required: true },
  
    
},{timestamps:true}    );
  
  const Listing = mongoose.model('Listing', listingSchema);

export default Listing;