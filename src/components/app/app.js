import React from 'react'
import AppHeader from "../app-header/"
import SearchPanel from "../search-panel/"
import PostStatusFilter from "../post-status-filter/"
import PostList from "../post-list/" 
import PostAddForm from "../post-add-form/"
import "./app.css"
//import style from "./App.module.css"
import styled from "styled-components" // Стилізуєм зразу в .js файлі

// Стилізуєм зразу в .js файлі
const AppBlock = styled.div`
    
        margin: 0 auto;
        max-width : 800px; 
`
// copy AppBlock and add some new css-properties
const StyleAppBlock = styled(AppBlock)`
    background-color:grey;
`

export default class App extends React.Component {
    constructor(props){
        super(props)
        // State на пряму не можна змінювати !!!!!!!!!!!!!!!!!!!!!!!
        this.state = {
             data : [
                {id:1,label:"Going to learn React",important:true},
                {id:2,label:"WOOOOW!",important:false},
                {id:3,label:"I Love React",important:false}
            ]
        }
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)

        this.maxId = 4
    }

    addItem(text) {
        const newItem = {
           id: this.maxId++, label:text,important:false
        }
                // setState // оновлюж стан
        this.setState(({data}) => {
            const newArr = [...data,newItem] // Добавляєм до масиву ще 1 знач
            return {
                data: newArr
            }
        })
    }
    deleteItem(id){
          // State на пряму не можна змінювати !!!!!!!!!!!!!!!!!!!!!!!
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id )
            const before = data.slice(0,index) // copy massiv
            const after  = data.slice(index+1)
            
            const newArray = [...before,...after] // з'єднуєм два масиви

            return {
                data : newArray
            }
        })
    }
   
    render() {
    return ( // Інший спосіб імпортувати стилі <div className = {style.app}> 
        <AppBlock> 
            <AppHeader/>
            <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
            </div>

            <PostList posts = {this.state.data}
            onDelete={this.deleteItem}
            />
            <PostAddForm onAdd={this.addItem} />
        </AppBlock>
        )
    }
}