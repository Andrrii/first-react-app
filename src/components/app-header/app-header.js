import React from 'react'
import "./app-header.css"
import styled from "styled-components" // Стилізуєм зразу в .js файлі

const Header = styled.div`
    display: flex;
    align-items : flex-end;
    justify-content: space-between;
    
    h1 {
        font-size:26px;
        color:${props => props.colored ? 'red' : 'black' };
        :hover {
            color:grey;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
      }
`

const AppHeader = ({countAllPost,countLiked}) => {
    return (
        <Header colored>
            <h1>Андрій Буца</h1>
            <h2>{countAllPost} дописів, сподобалось: {countLiked} </h2>
        </Header>

    )
}
export default AppHeader 