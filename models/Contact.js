// 1 require mongoose
const mongoose = require("mongoose");

// create Schema
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: Number,
    id_user: { type: Schema.Types.ObjectId, ref: 'user',required:true }
})

// export
module.exports = Contact = mongoose.model('contact', contactSchema)