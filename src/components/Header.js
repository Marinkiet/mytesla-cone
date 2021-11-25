import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'

function Header() {
    return (
        <Container>
            <a>
                <img src="/images/logo.svg"></img>
            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
            </Menu>
            <RighMenu>
                <a href="#">Shop</a>
                <a href="#">Tela account</a>
            <CustomMenu>

            </CustomMenu>
            </RighMenu>
            <BurgerNav>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
min-height :60px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding: 0 20px;
top:0;
left:0;
right:0;
z-index:1;

`
const Menu = styled.div`
display:flex;
align-items:center;
justify-content : center;
flex: 1;

    a{
        font-weight:600;
        text-transform:uppercase;
        padding: 0 10px;
        flex-wrap: no-wrap;
    }
    @media(max-width:768px){
        display:none;
    }
`
const RighMenu = styled.div`
display:flex;
align-items:center;
    a{
    font-weight:600;
    text-transform:uppercase;
    margin-right:10px;
    }

   
`
const CustomMenu = styled(MenuIcon)`
cursor:pointer;
`

const BurgerNav = styled.div`
position:fixed;
top: 0;
bottom: 0;
right: 0;
background: white;
width: 300px;
z-index: 16;
`