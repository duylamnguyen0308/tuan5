import { SibarCard } from "Components/SibaCard"
import { styled } from "styled-components"
import dash from "Pictures/layer group.png"
import vector from "Pictures/Vector1.png"
import user from "Pictures/user.png"
import oder from "Pictures/oder.png"
import ship from "Pictures/ship.png"
import trans from "Pictures/trans.png"
import set from "Pictures/set.png"
import logout from "Pictures/logout.png"



const SibarStyled = styled.div`
padding: 44px 55px;
height: 100vh;
.title{
    font-size: 34px;
    font-weight: bold;
}
`
export const Sibar = () => {
    return <SibarStyled>
        <div className="title">Lisa Admin</div>
        <div>
            <SibarCard img={dash} text="Dashboard" ></SibarCard>
            <SibarCard img={vector} text="Products" ></SibarCard>
            <SibarCard img={user} text="Customers" ></SibarCard>
            <SibarCard img={oder} text="Orders" ></SibarCard>
            <SibarCard img={ship} text="Shipments" ></SibarCard>
            <SibarCard img={trans} text="Transactions" ></SibarCard>
            <SibarCard img={set} text="Settings" ></SibarCard>
            <SibarCard img={logout} text="Logout" ></SibarCard>
        </div>
    </SibarStyled>
}