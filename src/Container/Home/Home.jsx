import { styled } from "styled-components"
import { Lisa } from "Components/Lisa"
import { Brand } from "Components/Brand"
import { Zera } from "Components/Zera"
import { Sub } from "Components/Sub"
import { Ins } from "Components/Ins"
import { Seller } from "Components/Seller"
import { End } from "Components/End"
const HomeStyled = styled.div`
    
`
 const Home =()=>{
return <HomeStyled>
<Lisa></Lisa>
<Brand></Brand>
<Sub></Sub>
<Zera></Zera>
<Seller></Seller>
<Ins></Ins>
<End></End>
</HomeStyled>
}
export default Home;