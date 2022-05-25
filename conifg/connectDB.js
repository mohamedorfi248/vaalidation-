// 1 require mongoose
const mongoose = require("mongoose");

// connect DB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("Database connected ...");
    } catch (error) {
        console.log("Database is not connected !!!", error)
    }
}

// export 
module.exports = connectDB;