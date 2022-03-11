import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'> FinanzApp </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>Sobre Nosotros</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='discover'>Descubre</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='services'>Servicios</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='signup'>Registrate</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Ingresa</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar