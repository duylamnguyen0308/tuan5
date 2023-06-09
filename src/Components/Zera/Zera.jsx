import { styled } from "styled-components"
import zera from "Pictures/sieumau.png"
import zera2 from "Pictures/1024px-Zara_Logo 2.png"
const ZeraStyled = styled.div`
max-height: 776px;
background-color: black;

margin: 0 auto;

.zera{
    position: relative;
}
.zera2{
    position: absolute;
    left: 50%;
    margin: 170px auto;

}
.text{
    color: #FF6F61;
    font-size: 33px;
    width: 700px;
    margin-top: 50px;
    margin-bottom: 50px;
}
.button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 19px 26px;
    gap: 8px;
    font-size: 30px;
    border: 1px solid transparent;
}
.button:hover{
    background-color: #FF6F61;
    transition: 0.5s;
}
.main{
    margin: 0 auto;
    max-width: 1920px;
    display:flex;
}
`
export const Zera = () => {
    return <ZeraStyled>
        <div className="main">
            <img className="zera" src={zera} alt="" />
            <div className="zera2">
                <img src={zera2} alt="" />

                <div className="text">
                    Lustrous yet understated. The new evening
                    wear collection exclusively offered at the
                    reopened Giorgio Armani boutique in Los
                    Angeles.
                </div>
                <button className="button" >See Collection</button>
            </div>
        </div>
    </ZeraStyled>
}