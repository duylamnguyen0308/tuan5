import { styled } from "styled-components"
import { useState } from "react";
const CardStyled = styled.div`
    
    width: 300px;
    .img{
        width: 270px;
        height: 320px;
        margin-top:20px;
    }
    .hello{
        background-color: yellow;
        padding: 20px;
        display: none;
        opacity: 0;
        position: absolute;
        transition: .5s ease;
    }
    .title{
        font-size: 16px;
        margin-top:10px;
        font-weight: bold;
    }
    .text2{
        margin-top:10px;
        display: flex;
        width: 90%;
        justify-content: space-between;
    }
    .text{
        color: #b8b6b6;
    }
    .main{
        position: relative;
    }
    .main:hover .hello{
        opacity: 1;
    }
`
export const Card = ({ img, title, text, money }) => {
    return <CardStyled>
        <div className="main">
            <img className="img" src={img} alt="" />
            <div className="hello">
            <div>hello</div>
            </div>
        </div>
        <div className="title">{title}</div>
        <div className="text2">
            <div className="text">{text}</div>
            <div className="money">{money}</div>
        </div>
    </CardStyled>
}