const { NextResponse } = require("next/server");
import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { writeFile } from 'fs/promises';
import path from 'path'; // Import path module

const fs = require('fs');

// API ENDPOINT TO GET ALL BLOG


export async function GET(request) {
    const blogId = request.nextUrl.searchParams.get("id");
    if (blogId) {
        const blog = await BlogModel.findById(blogId);
        return NextResponse.json(blog);
    } else {
        const blogs = await BlogModel.find({});
        return NextResponse.json({ blogs});
    }
    
}


// API ENDPOINT FOR UPLOADING BLOG...
export async function POST(request) {
    await ConnectDB(); // Ensure DB connection is established when needed

    try {
        const formData = await request.formData();
        const timestamp = Date.now();

        // Handle the image
        const image = formData.get('image');
        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);

        // Resolve the path for storing image
        const imagePath = path.resolve('public', `${timestamp}_${image.name}`);
        await writeFile(imagePath, buffer);

        const imgUrl = `/${timestamp}_${image.name}`;

        // Fetch form data (corrected key names)
        const blogData = {
            title: formData.get('title'), // Use 'title' not 'text-title'
            description: formData.get('description'),
            category: formData.get('category'),
            author: formData.get('author'),
            image: imgUrl,
            authorImg: formData.get('authorImg')
        };

        // Create the blog entry in the database
        await BlogModel.create(blogData);
        console.log("Blog Saved");

        return NextResponse.json({ success: true, msg: "blog added" });

    } catch (error) {
        console.error("Error saving blog:", error);
        return NextResponse.json({ success: false, msg: "Error saving blog", error });
    }
}


//ENDPOINT TO DELETE BLOG

export async function DELETE(request) {
    const id = await request.nextUrl.searchParams.get('id');
    const blog = await BlogModel.findById(id);
    fs.unlink(`./public${blog.image}`,()=>{})
    await BlogModel.findByIdAndDelete(id);
    return NextResponse.json({msg:"Blog Deleted"})
}
