import React, { useState } from "react";
import axios from "axios";
import style from "./style.module.css";
import Comments from "../Comments/Comments.jsx";
import CommentBox from "../CommentBox/CommentBox.jsx";

export default function Post({ id, title, content, createdAt }) {
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleToggleComments = async () => {
        if (!showComments) {
            try {
                setLoading(true);
                const response = await axios.get(`https://projeto-final-m5-15w5.onrender.com/comments/get-from-post/${id}`);
                setComments(response.data.content);
                setShowComments(true);
                setLoading(false);
            } catch (error) {
                setError("Error fetching comments. Please try again later.");
                setLoading(false);
            }
        } else {
            setShowComments(false);
        }
    };

    const handleCommentAdded = (newComment) => {
        setComments([...comments, newComment]);
    };

    return (
        <main>
            <div className={style.post}>
                <div className={style.texts}>
                    <h2>{title}</h2>
                    <p className={style.info}>
                        <time>{createdAt}</time>
                    </p>
                    <p className={style.summary}>{content}</p>
                    <button className={style.toggleButton} onClick={handleToggleComments}>
                        {showComments ? "Hide Comments" : "Show Comments"}
                    </button>
                    {loading && <p>Loading comments...</p>}
                    {error && <p className={style.error}>{error}</p>}
                    {showComments && (
                        <>
                            <CommentBox postId={id} onCommentAdded={handleCommentAdded} />
                            <Comments comments={comments} />
                        </>
                    )}
                </div>
            </div>
        </main>
    );
}

