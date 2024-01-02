import mongoose from "mongoose";
mongoose.set('strictQuery', true)

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected to DB")
    } catch (error) {
        console.log(error)
    }
}