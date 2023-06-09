import { Sibar } from "Components/Sibar"
import { styled } from "styled-components"
import { Header } from "Components/Header"
import { Main } from "Components/Main"

const AdminStyled = styled.div`
display: flex;
.main{
    background-color: #E5E5E5;
}
`
const Admin = () => {
    return <AdminStyled>
        <Sibar></Sibar>
        <div className="main">
            <Header></Header>
            <Main></Main>
        </div>
    </AdminStyled>
}
export default Admin