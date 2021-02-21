import React from "react"
import "./post-list.css"

import PostListItem from "../post-list-item/"

const PostList = () => {
    return (
        <ul className = "app-list list-group">
            <PostListItem label="Going to learn React" />
            <PostListItem label="WOOOOW!"/>
            <PostListItem label="I Love React"/>
        </ul>
    )
}

export default PostList