import { styled } from "styled-components"

const SibarCardStyled= styled.div`
display: flex;
margin-top:60px ;
.text{
    font-size: 20px;
    margin-left: 20px;
    color: #CDCDCD;
    font-weight: bold;
}
`
export const SibarCard=({img, text})=>{
    return <SibarCardStyled>
        <img src={img} alt="" />
        <div className="text">{text}</div>
    </SibarCardStyled>
}