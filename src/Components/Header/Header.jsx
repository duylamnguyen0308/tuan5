import { styled } from "styled-components"
import seach from "Pictures/seach.png"
import bacham from"Pictures/bacham.png"
import bell from "Pictures/Group 1.png"
import logo from"Pictures/Ellipse 1.png"
const HeaderStyled = styled.div`
margin: 20px auto;
justify-content: space-between;
display: flex;
align-items: center;
width: 1530px;
padding: 20px 65px;
.h1{
    font-size: 40px;
    font-weight: bold;
}
.img{
    
}
.input{
    color: #7B7878;
    width: 562px;
    height: 55px;
    border-radius:15px;
    border: 1px solid transparent;
}
.bacham{
    margin-right: 50px;
}

`
export const Header=()=>{
    return <HeaderStyled>
        <div className="h1">Overeview</div>
        <input className="input" type="text"  value={"Search..."}  />
        <div className="img">
            <img className="bacham" src={bacham} alt="" />
            <img className="bacham" src={bell} alt="" />
            <img src={logo} alt="" />
        </div>
    </HeaderStyled>
}