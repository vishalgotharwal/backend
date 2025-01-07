import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

//during accesing the data two things is important 
//1 st is -> always use async
// 2nd try and catch 


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
          `${process.env.MONGODB_URI} / ${process.env.DB_NAME}`
        );
        console.log(`MongoDB connected! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
};

export default connectDB

