import { User } from "@/models/users.models";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { userId } = await params;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json({
                message: "User not found",
            });
        }
        return NextResponse.json({
            message:"user fetched",
            user
        })
    } catch (error) {
        return NextResponse.json({
            message: "Failed to fetch user",
            error: error.message,
        });
        
    }
}

export async function DELETE(request, { params }) {
    const { userId } = await params;
    try {
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            return NextResponse.json({
                message: "User not found",
            });
        }
    } catch (error) {
        return NextResponse.json({
            message: "Failed to delete user",
            error: error.message,
        });
    }
    return NextResponse.json({
        message: "User deleted successfully",
    });
}

export async function PUT(request,{params}){
    const {userId}=await params;
    const {name,password}=await request.json();
    try {
        const user=await User.findById(userId);
        if(!user){
            return NextResponse.json({
                message:"User not present"
            })
        }
        user.name=name;
        user.password=password;
        const updatedUser=await user.save();
        return NextResponse.json({
            message:"user updated successfully",
            updatedUser
        })
    } catch (error) {
        return NextResponse.json({
            message: "Failed to update user",
            error: error.message,
        });
    }
}