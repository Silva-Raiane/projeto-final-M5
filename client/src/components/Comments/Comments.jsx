import React from "react";
import style from "./style.module.css"

export default function Comments({ comments }) {
    return (
        <div>
        <h3>Comments</h3>
        {comments.map((comment, index) => (
            <div key={index} className="comment">
            <p className="comment-content">{comment.comment}</p>
            <p className="comment-date">Created at: {comment.createdAt}</p>
            </div>
        ))}
        </div>
    );
}
