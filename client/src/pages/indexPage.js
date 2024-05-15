import { useState } from "react";
import "../App.css";
import Post from "../components/Posts/Post.jsx";
import CreatePost from "../components/CreatePost/CreatePost.jsx";
import axios from "axios";

export default function IndexPage() {
    const [posts, setPosts] = useState([]);

    async function getPosts() {
        axios.get("https://projeto-final-m5-15w5.onrender.com/posts/getAll").then(response => {
            setPosts(response.data.response.posts)
        })
    }
    
    getPosts();

  return (
    <div>
      <CreatePost />
      <h1>Posts</h1>
      <>
        {posts.map((item) => (
          <Post key={item.id} id={item.id} title={item.title} createdAt={item.createdAt} content={item.content} />
        ))}
      </>
    </div>
  );
}
