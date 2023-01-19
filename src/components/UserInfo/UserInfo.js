import React, { useEffect, useState } from "react";
import { fetchData } from "../ProfilePage/ProfilePage";
import "./UserInfo.css";

const USER_INFO_PROFILE = "https://jsonplaceholder.typicode.com/users/1";

export default function UserInfo({ totalPosts }) {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        fetchData(USER_INFO_PROFILE).then(data => setUserInfo(data)).catch(e => alert(e));
    });

    return (
        <div className="user-info">
            <header>
                <div className="avatar-img">
                    <img src="https://via.placeholder.com/150/24f355" alt="User's profile" />
                </div>
                <div className="details">
                    <div className="username-n-btns">
                        <span className="username">{userInfo.username}</span>
                        <div className="connect-btns">
                            <button>Follow</button>
                            <button>Message</button>
                        </div>
                    </div>
                    <div className="for-desktop">
                        <div className="user-stats">
                            <div className="user-stat">
                                <span><strong>{totalPosts}</strong></span>
                                <span>Posts</span>
                            </div>
                            <div className="user-stat">
                                <span><strong>265M</strong></span>
                                <span>Followers</span>
                            </div>
                            <div className="user-stat">
                                <span><strong>62</strong></span>
                                <span>Following</span>
                            </div>
                        </div>
                        <div className="user-bio">
                            <span><strong>{userInfo.name}</strong></span>
                            <span>{userInfo.email}</span>
                            <a href={userInfo.website}>{userInfo.website}</a>
                        </div>
                    </div>
                </div>
            </header>
            <div className="for-mobile">
                <div className="user-bio">
                    <span><strong>{userInfo.name}</strong></span>
                    <span>{userInfo.email}</span>
                    <a href={userInfo.website}>{userInfo.website}</a>
                </div>
                <hr />
                <div className="user-stats">
                    <div className="user-stat">
                        <span><strong>{totalPosts}</strong></span>
                        <span>Posts</span>
                    </div>
                    <div className="user-stat">
                        <span><strong>265M</strong></span>
                        <span>Followers</span>
                    </div>
                    <div className="user-stat">
                        <span><strong>62</strong></span>
                        <span>Following</span>
                    </div>
                </div>
                {/* <hr /> */}
            </div>
        </div>
    );
}