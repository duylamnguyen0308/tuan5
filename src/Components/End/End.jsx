import { styled } from "styled-components"
import fb from "Pictures/fb.png"
import twit from "Pictures/twit.png"
import ind from "Pictures/in.png"
import ins from "Pictures/ins.png"
import imga from "Pictures/icons_payment 1.png"
import muiten from "Pictures/muiten.png"
const EndStyled = styled.div`
.background{
    background-color: black;
}
.end2{
    position: relative;
    height: 40px;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 300px;
    justify-content:space-between;
    max-width: 1320px;
    margin: 0 auto;


}
.end{
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    max-width: 1320px;
    margin: 140px auto;
    }
    .lisa{
        font-size:28px;
        margin-bottom: 20px;
    }
    .text{
        margin-bottom: 10px;
    }
    .img{
        display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top:65px ;
    }
    .text:hover{
        color: #FF6F61;
        transition: 0.3s;
        
        
    }
`
export const End = () => {
    return <EndStyled>
        <div className="end">
            <div >
                <div className="lisa">Lisa</div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna
                </div>
                <div className="img">
                    <img src={fb} alt="" />
                    <img src={twit} alt="" />
                    <img src={ind} alt="" />
                    <img src={ins} alt="" />
                </div>
            </div>
            <div>
                <div className="lisa">CATALOG</div>
                <div className="text">Necklaces</div>
                <div className="text">hoodies</div>
                <div className="text">Jewelry Box</div>
                <div className="text">t-shirt</div>
                <div className="text">jacket</div>
            </div>
            <div>
                <div className="lisa">ABOUT US</div>
                <div className="text">Our Producers</div>
                <div className="text">Sitemap</div>
                <div className="text">FAQ</div>
                <div className="text">About Us</div>
                <div className="text">Terms & Conditions</div>
            </div>
            <div>
                <div className="lisa">CUSTOMER SERVICES</div>
                <div className="text">Contact Us</div>
                <div className="text">Track Your Order</div>
                <div className="text">Product Care & Repair</div>
                <div className="text">Book an Appointment</div>
                <div className="text">Shipping & Returns</div>
            </div>
        </div>
        <div className="background">
            <div className="end2">
                <div>© 2023 LISA , inc.</div>
                <div>
                    <img src={imga} alt="" />
                </div>
                <div style={{ display: "flex" }}>
                    <div>Scroll to top</div>
                    <img src={muiten} alt="" />
                </div>
            </div>
        </div>
    </EndStyled>
}