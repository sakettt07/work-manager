import { connectDB } from "@/helper/db";
import {Work} from "@/models/work.models";
import { NextResponse } from "next/server";

connectDB();
export async function GET(request){
    let works=[];
    try {
        works=await Work.find();

    } catch (error) {
        return NextResponse.json({
            message:`Failed to fetch the works||${error}`,
            success:false,
        })
    }
    return NextResponse.json({
        message:"Works fetched successfully",
        success:true,
        works
    })
}

export async function POST(request){
    const {title,description,createdBy} =await request.json();
    try{
        const work=new Work({title,description,createdBy});
        

        await work.save();
        return Response.json({
            message:"Work created successfully",
            success:true,
            work
        })
    }
    catch(error){
        return NextResponse.json(
            {
                message:"Failed to create work",
                success:false,
                error
            }
        )
    }
}