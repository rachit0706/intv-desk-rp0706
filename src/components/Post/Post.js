import React from "react";
import "./Post.css";

export default function Post({ details }) {

    return (
        <div className="post">
            <a href={details.url}>
                <div className="view-title">
                    <p>{details.title}</p>
                </div>
                <img src={details.thumbnailUrl} alt={details.title} />
            </a>
        </div>
    );
}