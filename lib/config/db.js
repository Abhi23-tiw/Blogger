import mongoose from "mongoose";


export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://mongoDb:mongo925@cluster0.f6juaqh.mongodb.net/blog-app')
    console.log("DB connected ");
}

