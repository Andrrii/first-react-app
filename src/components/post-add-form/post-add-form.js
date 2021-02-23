import React from "react"
import "./post-add-form.css"

// onAdd - витягнули з app.js
const PostAddForm = ({onAdd}) => {

    return (
        <div className = "bottom-panel d-flex">
            <input
                type = "text"
                placeholder = "Відтворюйте власні думки з допомогою сайту"
                className = "form-control new-post-label"
            />

            <button
                type = "submit"
                className = "btn btn-outline-secondary"
                onClick= {() => onAdd('hello')}
            >Додати запис</button>
        </div>
    )
}
export default PostAddForm