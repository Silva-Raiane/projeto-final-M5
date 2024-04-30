import "../App.css";
import Post from "../components/post.js";

export default function IndexPage(){
    return(
        <div>
            <h1>Posts</h1>
            <Post />
            <Post />
            <Post />
        </div>
    );
}