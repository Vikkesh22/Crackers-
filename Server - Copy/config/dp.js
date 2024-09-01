const mongoose = require("mongoose");
const url = "mongodb+srv://Vikkesh:Vikkesh12@cluster0.nsncbwa.mongodb.net/Crackers-2?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
    try {
        const con = await mongoose.connect(url);
        console.log(`MongoDB connected: ${con.connection.host}`);
        
    } catch (error) {
        console.log(error);

         
    }
};

module.exports = connectDB;
