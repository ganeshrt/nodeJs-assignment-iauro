import mongoose from 'mongoose';
const uniqueValidator = require('mongoose-unique-validator');

const schema = new mongoose.Schema({
    email: { type: String, unique: true, required: true, dropDups: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, required: true }
});
schema.plugin(uniqueValidator);
const userSchema = mongoose.model('user', schema);
export default userSchema;