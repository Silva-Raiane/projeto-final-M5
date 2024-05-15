import React, { useState } from "react";
import axios from "axios";
import style from "./style.module.css";
import Comments from "../Comments/Comments.jsx";

export default function Post({ id, title, content, createdAt }) {
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleToggleComments = async () => {
        if (!showComments) {
            try {
                setLoading(true);
                axios.get
                (
                    `https://projeto-final-m5-15w5.onrender.com/comments/get-from-post/${id}`

                )
                .then(response => {
                    setComments(response.data.content);
                    setShowComments(true);
                    setLoading(false);
                });


            } catch (error) {
                setError("Error fetching comments. Please try again later.");
                setLoading(false);
            }
        } else {
            setShowComments(false);
        }
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
            {showComments && <Comments comments={comments} />}
            </div>
        </div>
        </main>
    );
}
