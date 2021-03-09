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
                {id:1,label:"Going to learn React",important:true,like:false},
                {id:2,label:"WOOOOW!",important:false,like:false},
                {id:3,label:"I Love React",important:false,like:false}
            ]
        }
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.onToggleLiked = this.onToggleLiked.bind(this)
        this.onToggleImportant = this.onToggleImportant.bind(this)
       


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
   
    onToggleLiked(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)

            const old = data[index]

            const newItem = {...old,like: !old.like} // Перезаписуєм знач like

            const before = data.slice(0,index) // copy massiv
            const after  = data.slice(index+1)
            
            const newArray = [...before,newItem,...after] // створюєм новий мас.об'єктів

            return {
                data : newArray
            }
        })

    }

    onToggleImportant(id) {

        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)

            const old = data[index]

            const newItemA = {...old,important: !old.important} // Перезаписуєм знач important

            const before = data.slice(0,index) // copy massiv
            const after  = data.slice(index+1)
            
            const newArray = [...before,newItemA,...after] // створюєм новий мас.об'єктів

            return {
                data : newArray
            }
        })
    }

    render() {
        const {data} = this.state
    const countLiked = data.filter(item => item.like).length
    const countAllPost = data.length

    return ( // Інший спосіб імпортувати стилі <div className = {style.app}> 
        <AppBlock> 
            <AppHeader
            countAllPost = {countAllPost}
            countLiked = {countLiked}
            
            />
            <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
            </div>

            <PostList posts = {this.state.data}
            onDelete={this.deleteItem}
            onToggleImportant = {this.onToggleImportant}
            onToggleLiked = {this.onToggleLiked}
            />
            <PostAddForm onAdd={this.addItem} />
        </AppBlock>
        )
    }
}