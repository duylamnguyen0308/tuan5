import { styled } from "styled-components"
import icon from "Pictures/search.png"
import acc from "Pictures/acc.svg"
import shop from "Pictures/shop.svg"
import shop2 from "Pictures/shopwhite.png"
import lisa from "Pictures/engin-akyurt-jaZoffxg1yc-unsplash 1.png"
import frame from "Pictures/Frame.png"
import vecter from "Pictures/Vector.png"
import recta from "Pictures/Rectangle 124.png"
const LisaStyled = styled.div`
background: #F0F0F0;
position: relative;
.page{
    max-width: 1320px;
    margin: 0 auto;
}
.header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0px;
}
.title{
    font-size: 42px;
    font-family: AmstelvarAlpha;
}
.collect{
    font-size: 74px;
    margin-top: 80px;
}
.text2{
    font-size: 30px;
    margin-top: 30px;
}
.login{
    display: flex;
    justify-content: space-between;
    font-size:18px;
}
.login:hover{
    color: #FF6F61;
}
.main{
    display: flex;
    width: 1250px;
    padding: 100px 0px;
}
.lisa{
    border-top-left-radius: 160px;
    border-bottom-right-radius:160px;
    position: absolute;
}
.recta{
    margin-top: 20px;
    margin-left:20px;
}
.button{
    color: white;
    background-color: black;
    font-size: 29px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 19px 26px;
    gap: 8px;
    margin-top:60px ;
    border: 1px solid transparent;
}
.button:hover{
    background-color: #FF6F61 ;
    transition: 0.5s;
}
.frame{
    position: absolute;
    left: 0%;
    bottom: 30%;
}
.vecter{
    position: absolute;
    right: 0%;
    bottom: 30%;
}
.logo{
    margin-right: 10px;
    margin-left: 20px;
}
`
export const Lisa = () => {
    return <LisaStyled>
        <div className="page">
            <div className="header">
                <img src={icon} alt="" />
                <div className="title">Lisa Store</div>
                <div className="login">
                    <img className="logo" src={acc} alt="" />
                    <div>Account</div>
                    <img className="logo" src={shop} alt="" />
                    <div>Shoping</div>
                </div>
            </div>
            <div className="main">
                <div className="text">
                    <div className="collect">Collections</div>
                    <div className="text2">
                        you can explore ans shop many differnt collection
                        from various barands here.
                    </div>
                    <button className="button">
                        <img src={shop2} alt="" />
                        Shop Now
                    </button>
                </div>
                <div img="img">
                    <img className="lisa" src={lisa} alt="" />
                    <img className="recta" src={recta} alt="" />
                </div>
            </div>
            <img className="frame" src={frame} alt="" />
                <img className="vecter" src={vecter} alt="" />
        </div>
    </LisaStyled>
}