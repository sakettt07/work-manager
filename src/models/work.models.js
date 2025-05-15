import mongoose from "mongoose";

const workSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    addedDate:{
        type:Date,
        required:true,
        default:Date.now()
    },
    status:{
        type:String,
        enum:["Pending","Completed"],
        default:"Pending"
    },
    createdBy:{
        type:mongoose.ObjectId,
        required:true
    }
},{timestamps:true});

export const Work=mongoose.models.Work||mongoose.model("Work",workSchema);
