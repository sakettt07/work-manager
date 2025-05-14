import { User } from "@/models/users.models";
import mongoose from "mongoose";
export const connectDB=async()=>{
    try{
        const uri="mongodb+srv://guptasaket898:saket123@cluster0.5svfrxe.mongodb.net/work-manager?retryWrites=true&w=majority&appName=Cluster0"
        const connection=await mongoose.connect(uri, {
            dbName: "work-manager",
        });
        console.log("MongoDB connected ...");
    }
    catch(err){
        console.log("Failed to connect to MongoDB");
        console.log(err);
    }
};