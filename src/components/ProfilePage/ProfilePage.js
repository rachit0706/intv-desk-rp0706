import axios from "axios";
import React, { useEffect, useState } from "react";
import PostsGrid from "../PostsGrid/PostsGrid";
import UserInfo from "../UserInfo/UserInfo";
import "./ProfilePage.css";

const PHOTOS_API = "http://jsonplaceholder.typicode.com/photos"; 

export const fetchData = async (url) => {
    try {
        const response = await axios.get(url);

        return response.data;
    }catch(e) {
        alert(e);
    }
}

export default function ProfilePage() {
    const [photos, setPhotos] = useState([]);
    
    useEffect(() => {
        fetchData(PHOTOS_API).then(data => {
            setPhotos(data);
        }).catch(e => alert(e));
    });

    return (
        <div>
            <UserInfo totalPosts={photos.length} />
            <hr />
            <div className="navigation">
                <span>Posts</span>
                <span>Reels</span>
                <span>Tags</span>
            </div>
            <PostsGrid posts={photos} />
        </div>
    );
}