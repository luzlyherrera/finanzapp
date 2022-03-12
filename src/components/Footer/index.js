import React from 'react'
import {FaFacebook, FaTwitter, FaLinkedin, FaInstagram} from 'react-icons/fa'
import { FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLink, 
    FooterLinkItems,
    FooterLinkTitle,
    FooterLinksWrapper,
    SocialMedia,
    SocialIcons,
    SocialIconLink,
    SocialLogo,
    SocialMediaWrap,
    WebsiteRights,
} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Sobre Nosotros</FooterLinkTitle>
                            <FooterLink to='/'>Como Trabajamos</FooterLink>
                            <FooterLink to='/'>Testimonios</FooterLink>
                            <FooterLink to='/'>Equipo de Trabajo</FooterLink>
                            <FooterLink to='/'>Convenios</FooterLink>
                            <FooterLink to='/'>Terminos</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contactanos</FooterLinkTitle>
                            <FooterLink to='/'>Atención al Cliente</FooterLink>
                            <FooterLink to='/'>Soporte</FooterLink>
                            <FooterLink to='/'>Email</FooterLink>
                            <FooterLink to='/'>PQR</FooterLink>
                            <FooterLink to='/'>Oficina</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Redes Sociales</FooterLinkTitle>
                            <FooterLink to='/'>Instagram</FooterLink>
                            <FooterLink to='/'>Facebook</FooterLink>
                            <FooterLink to='/'>Twitter</FooterLink>
                            <FooterLink to='/'>LinkedIn</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Trabaja con Nosotros</FooterLinkTitle>
                            <FooterLink to='/'>Telefono</FooterLink>
                            <FooterLink to='/'>Email</FooterLink>
                            <FooterLink to='/'>Oficina</FooterLink>
                            <FooterLink to='/'>Computrabajo</FooterLink>
                            <FooterLink to='/'>Smartr</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>FinanzApp</SocialLogo>
                    <WebsiteRights>FinanzApp © {new Date().getFullYear()} Todos los Derechos Reservados</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='//www.facebook.com/finanzapp' target='_blank' aria-label='Facebook'>
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href='//www.twitter.com/finanzapp' target='_blank' aria-label='Twitter'>
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href='//www.linkedin.com/finanzapp' target='_blank' aria-label='LinkedIn'>
                            <FaLinkedin/>
                        </SocialIconLink>
                        <SocialIconLink href='//www.instagram.com/finanzapp' target='_blank' aria-label='Instagram'>
                            <FaInstagram/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer