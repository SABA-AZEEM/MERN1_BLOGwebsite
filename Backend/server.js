import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app=express();
const PORT=8000;

//for parse request body
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//use cors as middleware
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log('Connected to DB!'))
    .catch((error)=>console.log(error.message))

const postSchema=new mongoose.Schema({
    title:String,
    author:String,
    content:String,
    image:String,
});
const Post=mongoose.model('Post',postSchema);

//get all posts
app.get('/posts',async(req,res)=>{
    const posts=await Post.find();
    res.send(posts);
})
//get one post
app.get('/posts/:id',async(req,res)=>{
    const post=await Post.findById(req.params.id);
    res.send(post);
})
//create new post
app.post('/posts',async(req,res)=>{
    const newPost=new Post(req.body);
    const savedPost=await newPost.save();
    res.send(savedPost);
})
//delete post
app.delete('/posts/:id',async(req,res)=>{
    await Post.findByIdAndDelete(req.params.id)
    res.status(200).send("Post Deleted");
})
//listen the port 
app.listen(process.env.PORT || PORT,()=>{
    console.log(`Server is running on ${PORT} PORT`);
})