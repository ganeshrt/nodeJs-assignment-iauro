import mongoose from 'mongoose';
const uniqueValidator = require('mongoose-unique-validator');

const schema = new mongoose.Schema({
    productName: { type: String, required: true },
    userId: { type: String, required: true },
    visible: { type: Boolean, required: true },
});
schema.plugin(uniqueValidator);
const productSchema = mongoose.model('product', schema);
export default productSchema;