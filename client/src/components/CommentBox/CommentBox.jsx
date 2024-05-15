import React, { useState } from "react";
import axios from "axios";
import style from "./style.module.css";

export default function CommentBox({ postId, onCommentAdded }) {
    const [comment, setComment] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");

        if (!token) {
            setError("You must be logged in to post a comment.");
            return;
        }

        try {
            const response = await axios.post(
                "https://projeto-final-m5-15w5.onrender.com/create-comment",
                { 
                    postId: postId, 
                    comment: comment 
                },
                {
                    headers: {
                        "x-access-token": token,
                        "Content-Type": "application/json"
                    }
                }
            );

            console.log("Comment created:", response.data);
            setComment("");
            setError("");
            onCommentAdded(response.data.comment);
        } catch (error) {
            console.error("Error creating comment:", error.response ? error.response.data : error);
            setError("Error creating comment. Please try again later.");
        }
    };

    return (
        <div className={style.commentBox}>
            <form onSubmit={handleSubmit} className={style.commentForm}>
                <label htmlFor="comment" className={style.commentLabel}>Write a comment:</label>
                <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                    className={style.commentTextarea}
                ></textarea>
                <button type="submit" className={style.commentButton}>Post Comment</button>
            </form>
            {error && <p className={style.error}>{error}</p>}
        </div>
    );
}
