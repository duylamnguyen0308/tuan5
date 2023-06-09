import { styled } from "styled-components"
import imga1 from "Pictures/image-product-9.png"
import imga2 from "Pictures/image-product-8.png"
import imga3 from "Pictures/image-product-10.png"
import imga4 from "Pictures/image-product-11.png"
import imga5 from "Pictures/image-product-12.png"
import imga6 from "Pictures/image-product-13.png"

const InsStyled = styled.div`
    position: relative;
    background-color: #F0F0F0;
    text-align: center;
    padding: 130px 10px;


.h1{
    font-size:50px;
   margin-bottom: 70px;
    font-weight: bold;
}
.text{
    color: #FF6F61;
    font-size: 28px;
    margin-top: 50px;
    font-weight: bold;
}
.imga{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; 
    max-width: 1320px;
    margin: 0 auto;
}
`
export const Ins = () => {
    return <InsStyled>            
        <div className="h1">Follow Products And Discounts On Instagram</div>
            <div className="imga">
                <img src={imga1} alt="" />
                <img src={imga2} alt="" />
                <img src={imga3} alt="" />
                <img src={imga4} alt="" />
                <img src={imga5} alt="" />
                <img src={imga6} alt="" />
            </div>
            <div className="text">@Lisa.official</div>
    </InsStyled>
}