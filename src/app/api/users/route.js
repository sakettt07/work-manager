import { connectDB } from "@/helper/db";
import { User } from "@/models/users.models";
import { NextResponse } from "next/server"

connectDB();
export async function GET(request) {
    let users=[];
    try {
        users=await User.find();
    } catch (error) {
        return NextResponse.json({
            message: "Failed to fetch users",
            error: error.message,
        });
    }
    return NextResponse.json({
        message: "Users fetched successfully",
        users,
    });
}

export async function POST(request) {
    //fetch the userdata from the request
    const { name, email, password } =await request.json();

    const user = new User({
        name,
        email,
        password,
    });
    try {
        const CreatedUser =await user.save();

        return NextResponse.json({
            message: "User Created successfully",
            user: CreatedUser,
        });
    } catch (error) {
        return NextResponse.json({
            message: "Failed to create user",
            error: error.message,
        });
    }
}