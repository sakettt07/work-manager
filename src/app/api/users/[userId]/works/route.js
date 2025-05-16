import { Work } from "@/models/work.models";
import { NextResponse } from "next/server";

export async function GET(request,{params}){
    const {userId}=await params;
    try {
        const work=await Work.find({createdBy:userId});
        if(!work){
            return NextResponse.json({
                message:"Work not found",
                success:false,
            })
        }
        return NextResponse.json({
            message:"Work fetched successfully",
            success:true,
            work
        })
    } catch (error) {
        return NextResponse.json({
            message:"Failed to fetch the work",
            success:false,
            error
        })
    }
}