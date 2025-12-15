import mongoose from "mongoose";


//function to connect to the mongodb database
export const connectDB = async() => {
    try {
        mongoose.connection.on('connected', () => console.log('Database connected succefully'))
        await mongoose.connect(`${process.env.MONGODB_URI}`)
    } catch (error) {
        console.log(`MongoDB connection failed: ${error}`)
    }
}