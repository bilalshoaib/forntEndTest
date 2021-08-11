const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, 'Please tell us your product name!']
  },
  category: {
    type: String,
    required: [true, 'Please tell us your category name!']
  },
  location: {
    type: String,
    required: [true, 'Please tell us your location!']
  },
 price: {
     type: Number,
    required: [true, 'Please tell us your price!']
 },
  createdAt: {
    type: Date,
    default: new Date()
  },

});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;
