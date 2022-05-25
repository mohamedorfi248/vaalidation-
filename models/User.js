// require mongoose
const mongoose = require("mongoose");

// Schema
const { Schema , model } = mongoose;

// create Schema
const userSchema = mongoose.Schema({
    name: {type: String,required: true},
    email: {type: String,required: true},
    password: { type: String,required: true},
    phone: Number,
    role: { type: String, required: true, enum: ["client", "admin", "agent"]},
    // verified: { type: Boolean, default: false}
})

// export
module.exports = User = mongoose.model('user', userSchema);
