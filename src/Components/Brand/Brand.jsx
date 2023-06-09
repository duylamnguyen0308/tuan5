import { styled } from "styled-components"
import Brand1 from "Pictures/brand-1.png"
import Brand2 from "Pictures/brand-2.png"
import Brand3 from "Pictures/brand-3.png"
import Brand4 from "Pictures/brand-4.png"
import Brand5 from "Pictures/brand-5.png"
import item1 from "Pictures/item-category-1.png"
import item2 from "Pictures/image-category-1.png"
import item3 from "Pictures/item-category-2.png"
import item4 from "Pictures/item-category-hover 1.png"
import item5 from "Pictures/item-category.png"

const BrandStyled = styled.div`
    margin: 115px auto;
    max-width: 1320px;
    .title{
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .explore{
     transform:  translateX(-54%) translateY(115%) rotate(-90deg);
    font-size: 37px;
    width: 1265px;
    }
    .img{
        display: flex;
    }
    .img2{
        width: 724px;
        margin:0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        row-gap: 50px;
        margin-left: 25px;
    }
    .sale{
        background-color: black;
    color: white;
    width: 40px;
    position: absolute;
    top: 115%;
    text-align: center;
    }
    .brand:hover{
        
    }

`
export const Brand = () => {
    return <BrandStyled>
        <div className="title" >
            <img className="brand" src={Brand1} alt="" />
            <img src={Brand5} alt="" />
            <img src={Brand3} alt="" />
            <img src={Brand4} alt="" />
            <img src={Brand2} alt="" />
        </div>
        <div className="explore" >EXPFLORE NEW AND POPULAR STYLES</div>
        <div className="img">
            <img src={item2} alt="" />
            <div className="img2">
                <img src={item5} alt="" />
                <div>
                    <img src={item1} alt="" />
                    <div className="sale">sale</div>
                </div>
                <img src={item3} alt="" />
                <img src={item4} alt="" />
            </div>
        </div>
    </BrandStyled>
}