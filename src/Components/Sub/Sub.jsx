import { Card } from "Components/Card/Card"
import sub1 from "Pictures/image-product-3.png"
import sub2 from "Pictures/image-product-4.png"
import sub3 from "Pictures/image-product.png"
import sub4 from "Pictures/image-product-1.png"
import sub5 from "Pictures/image-product-2.png"
import sub6 from "Pictures/image-product-5.png"
import sub7 from "Pictures/image-product-6.png"
import sub8 from "Pictures/image-product-7.png"

import filter from "Pictures/filter.png"
const { styled } = require("styled-components")


const SubStyled = styled.div`
        margin: 100px auto;
    .h1{
        font-size: 45px;
        text-align: center;
        font-weight: bold;
    }
    .choose{
        display: flex;
        font-size: 20px;
        max-width: 1320px;
        margin: 0 auto;
    }

    .button{ 
        background-color: black;
        color: white;
        width: 75px;
        height: 30px;
        border: 1px solid transparent;
    }
    .button:hover{
        background-color:#FF6F61 ;
        transition: 0.5s;
    }
    .all{
        margin-right:50px;
        font-weight: bold;
    }
    .shirt{
        margin-right:50px;
    }
    .hoodies{
        margin-right:50px
    }
    .jacket{
        margin-right:50px;
    }
    .card{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        margin: 40px auto;
        max-width: 1320px;
    }
    .form{
        margin: 55px auto;
    }

`
export const Sub = () => {
    return <SubStyled>
        <div className="h1">Or Subscribe To The Newsletter</div>
        <div className="form">
            <div className="choose">
                <div className="all">all products</div>
                <div className="shirt">t-shirt</div>
                <div className="hoodies">hoodies</div>
                <div className="jacket">jacket</div>
                <button className="button">
                    <img src={filter} alt="" />
                    Filter
                </button>
            </div>
            <div className="card">
                <Card img={sub1} title={"Adicolor Classics Joggers"} text={"Dress"} money={"$63.85"}> </Card>
                <Card img={sub2} title={"Nike Sportswear Futura Luxe"} text={"Dress"} money={"$130.00"} > </Card>
                <Card img={sub6} title={"Geometric print Scarf"} text={"Dress"} money={"$53.00"}> </Card>
                <Card img={sub3} title={"Yellow Reserved Hoodie"} text={"Dress"} money={"$155.00"}> </Card>
                <Card img={sub8} title={"Basic Dress Green"} text={"Dress"} money={"$236.00"}> </Card>
                <Card img={sub7} title={"Nike Air Zoom Pegasus"} text={"Dress"} money={"$198.00"}> </Card>
                <Card img={sub4} title={"Nike Repel Miler"} text={"Dress"} money={"$120.50"}> </Card>
                <Card img={sub5} title={"Nike Sportswear Futura Luxe"} text={"Dress"} money={"$160.00"}> </Card>
            </div>
        </div>
    </SubStyled>
}