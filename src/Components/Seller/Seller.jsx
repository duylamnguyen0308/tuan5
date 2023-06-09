import { Card } from "Components/Card"
import { styled } from "styled-components"
import sub2 from "Pictures/image-product-4.png"
import sub3 from "Pictures/image-product.png"
import sub7 from "Pictures/image-product-6.png"
import sub8 from "Pictures/image-product-7.png"
const SellerStyled = styled.div`
   .h1{
        font-size: 45px;
        text-align: center;
        margin-top: 50px ;
        margin-bottom: 40px;
        font-weight: bold;
    }
    .choose{
        display: flex;
        font-size: 20px;
        margin: 0 auto;
        max-width: 1320px;
        justify-content: space-between;
    }

    .button{
        background-color: black;
        color: white;
        width: 85px;
        height: 30px;
        border: 1px solid transparent;

    }
    .button:hover{
        background-color: #FF6F61;
        transition: 0.5s;
    }
    .all{
        margin-right:50px;
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

        max-width:1320px;
        margin: 145px auto;
    }
    .click{
        display: flex;
    }
`
export const Seller = () => {
    return <SellerStyled>
        <div className="h1">Best Sellers</div>
        <div className="choose">
            <div className="click">
                <div className="all">All products</div>
                <div className="shirt">T-shirt</div>
                <div className="hoodies">Hoodies</div>
                <div className="jacket">Jacket</div>
            </div>

            <button className="button">
                <img src="" alt="" />
                Show All
            </button>
        </div>
        <div className="card">
            <Card img={sub8} title={"Basic Dress Green"} text={"Dress"} money={"$236.00"}> </Card>
            <Card img={sub2} title={"Nike Sportswear Futura Luxe"} text={"Dress"} money={"$130.00"}> </Card>
            <Card img={sub3} title={"Yellow Reserved Hoodie"} text={"Dress"} money={"$155.00"}> </Card>
            <Card img={sub7} title={"Nike Air Zoom Pegasus"} text={"Dress"} money={"$198.00"}> </Card>
        </div>
    </SellerStyled>
}