import React, {useState} from 'react'
import { useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll/modules'
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

  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = ()=> {
      if(window.scrollY >80){
          setScrollNav(true)
      } else {
          setScrollNav(false)
      }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () =>{
      scroll.scrollToTop();
  }

  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}> FinanzApp </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        >Sobre Nosotros</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='discover'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        >Descubre</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='services'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        >Servicios</NavLinks>
                    </NavItem>
                    {/*<NavItem>
                        <NavLinks to='signup'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        >Registrate</NavLinks>
                     </NavItem>*/}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signup'>Registro</NavBtnLink>
                    <NavBtnLink to='/signin'>Ingresa</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar