import mongoose from "mongoose";
import dotenv from "dotenv";dotenv.config();
import dns from "dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]); 

console.log(process.env.MONGO_URI);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected...")
  } catch (error) {
    console.log("❌ MongoDB connection failed")
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
