import React, { Component } from "react"
import "./search-panel.css"

export default class SearchPanel extends Component {
    constructor (props){
        super(props)
        this.state = {
            term : "Пошук по дописам"
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this)
    }
    onUpdateSearch(e){
        const term = e.target.value
        this.setState({term})
        this.props.onUpdateSearch(term) //  Для оновлення state в app.js
    }
    render(){
        return (
            <input
                className = "form-control search-input"
                type= "text"
                placeholder = {this.state.term}
                onChange = {this.onUpdateSearch}
            />
        )
    }
} 
 