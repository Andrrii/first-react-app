import React from "react"
import "./post-add-form.css"

// onAdd - витягнули з app.js
export default class PostAddForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            text : ''
        }
        this.onValueChange = this.onValueChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onValueChange(event) {  // event- подія
        this.setState({
            text: event.target.value
        })
    }
    
    onSubmit(event) {
        event.preventDefault()
        this.props.onAdd(this.state.text)   //  добавляєм
        this.setState({
            text: " "
        })
    }

    render () {
    return (
        <form 
        className = "bottom-panel d-flex"
            onSubmit = {this.onSubmit}
            >
            <input
                type = "text"
                placeholder = "Відтворюйте власні думки з допомогою сайту"
                className = "form-control new-post-label"
                onChange = {this.onValueChange} // Записуєм дані з інпуту
                value = {this.state.text}
            />

            <button
                type = "submit"
                className = "btn btn-outline-secondary"
               
            >Додати запис</button>
        </form>
    )
    }
}
