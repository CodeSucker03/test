import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
const PostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) return;
    dispatch(addPost({ title, body }));
    setTitle("");
    setBody("");
  };
  return <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post Title"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Post Body"
      />
      <button type="submit">Add Post</button>
    </form>
  </div>;
};

export default PostForm;
