import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Post from "@/models/Post";

export const GET = async ()=>{

    try{
        await connect();
         const posts:any = await Post.find();
         return new NextResponse(JSON.stringify(posts), {status: 200})

    }catch(err){

        return new NextResponse("db Error", {status: 500})
    }

};

export const POST = async (request:any)=>{
    const body = await request.json();

    const newPost = new Post(body);

    try {
        await connect();

        await newPost.save();

    } catch (err) {
        return new NextResponse("Database Error", {status: 500})
    }
}