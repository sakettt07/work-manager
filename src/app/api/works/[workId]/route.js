import { Work } from "@/models/work.models";
import { NextResponse } from "next/server";

export async function GET(request,{params}){
    const {workId}=params;
    try {
        const work=await Work.findById(workId);
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
export async function PUT(request,{params}){
    const {workId}=params;
    const {title,description,status}=await request.json();
    try {
        const work=await Work.findById(workId);
        if(!work){
            return NextResponse.json({
                message:"Work not found",
                success:false,
            })
        }
        work.title=title;
        work.description=description;
        work.status=status;
        await work.save();
        return NextResponse.json({
            message:"Work updated successfully",
            success:true,
            work
        })
    } catch (error) {
        return NextResponse.json({
            message:"Failed to update the work",
            success:false,
            error
        })
    }
}
export async function DELETE(request,{params}){
    const {workId}=params;
    try {
        const work=await Work.findByIdAndDelete(workId);
        if(!work){
            return NextResponse.json({
                message:"Work not found",
                success:false,
            })
        }
        return NextResponse.json({
            message:"Work deleted successfully",
            success:true,
        })
    } catch (error) {
        return NextResponse.json({
            message:"Failed to delete the work",
            success:false,
            error
        })
    }
    
}