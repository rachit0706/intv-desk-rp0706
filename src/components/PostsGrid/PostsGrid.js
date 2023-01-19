import React from "react";
import "./PostsGrid.css";
import Post from "../Post/Post";

export default function PostsGrid({posts}) {
    return (
        <div className="posts-grid">
            {posts.map(post => <Post details={post} key={post.id} />)}
        </div>
    );
}