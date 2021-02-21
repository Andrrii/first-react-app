import React from "react"
import "./post-add-form.css"

const PostAddForm = () => {

    return (
        <form className = "bottom-panel d-flex">
            <input
                type = "text"
                placeholder = "Відтворюйте власні думки з допомогою сайту"
                className = "form-control new-post-label"
            />

            <button
                type = "submit"
                className = "btn btn-outline-secondary"
            >Додати запис</button>
        </form>
    )
}
export default PostAddForm