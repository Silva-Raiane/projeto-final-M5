import React, { useState } from "react";
import style from "./style.module.css";
import axios from "axios";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      setError("You must be logged in to create a post.");
      return;
    }

    try {
      const response = await axios.post(
        "https://projeto-final-m5-15w5.onrender.com/create-post",
        {
          title: title,
          content: content,
        },
        {
          headers: {
            "x-access-token": token,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Post created:", response.data);
    } catch (error) {
      console.error(
        "Error creating post:",
        error.response ? error.response.data : error
      );
      setError("Error creating post. Please try again later.");
    }
  };

  return (
    <div className={style["create-post-container"]}>
      <h2 className={style["create-post-header"]}>Create New Post</h2>
      <form onSubmit={handleSubmit} className={style["create-post-form"]}>
        <label htmlFor="title" className={style["create-post-label"]}>
          Title:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className={style["create-post-input"]}
        />
        <label htmlFor="content" className={style["create-post-label"]}>
          Content:
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className={style["create-post-textarea"]}
        ></textarea>
        <button type="submit" className={style["create-post-button"]}>
          Create Post
        </button>
      </form>
      {error && <p className={style["error-message"]}>{error}</p>}
    </div>
  );
}
