import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
export const connectDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("database connected successfully")
    } catch (error) {
       console.log(error,error.message) 
    }
}