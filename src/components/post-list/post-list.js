import React from "react"
import "./post-list.css"
import { ListGroup } from "reactstrap"
import PostListItem from "../post-list-item/"

const PostList = ({posts,onDelete,onToggleImportant,onToggleLiked}) => {

    const elements = posts.map((item) => {
        return (
            <li key = {item.id} className= "list-group-item">
             <PostListItem label={item.label}
              important={item.important} onDelete={() => onDelete(item.id)}
                   // Видаляєм пост
                   like = {item.like}
              onToggleImportant = {() => {onToggleImportant(item.id)}} 
              onToggleLiked = {() => {onToggleLiked(item.id)}}

                />
            </li>
        )
    })
    return (
        <ListGroup className = "app-list ">
           {elements }
        </ListGroup>
    )
}

export default PostList