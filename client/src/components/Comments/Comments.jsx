import React from "react";
import style from "./style.module.css";

export default function Comments({ comments }) {
    return (
        <div className={style.comments}>
            {comments.length === 0 ? (
                <p>No comments yet. Be the first to comment!</p>
            ) : (
                comments.map((comment) => (
                    <div key={comment.id} className={style.comment}>
                        <p className="comment-content">{comment.comment}</p>
                        <p className="comment-date">Created at: {comment.createdAt}</p>
                    </div>
                ))
            )}
        </div>
    );
}

