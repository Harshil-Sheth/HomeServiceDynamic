import React /*, {useState, useEffect}*/ from 'react';
import { FaBars } from 'react-icons/fa'
import {Nav, NavLogo, NavbarContainer, MobileIcon, NavItem, NavMenu, NavLinks, NavBtn, NavBtnLink} from "./navbar.styles"
import image from './crown.svg'
import { withRouter } from 'react-router-dom';

import { animateScroll as scroll } from 'react-scroll';

const Navbar = ( {toggle,history} ) => {

    // const [scrollNav, setscrollNav] = useState(false)

    // const changeNav = () => {
    //     if(window.scrollY >= 80){
    //         setscrollNav(true)
    //     }
    //     else{
    //         setscrollNav(false)

    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll',changeNav)
    // }, []);
    const toggleHome = () =>{
        scroll.scrollToTop();
    }
    const toggleSignIn = () =>{
        scroll.scrollToTop();
    }

    return (   
        <>  
            <Nav /*scrollNav={scrollNav}*/>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}><img src={image} alt='logo' style={{height:"40px"}} /></NavLogo>
                    <MobileIcon onClick={toggle} >
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                            onClick={(e) => {e.preventDefault(); history.push('/')}}
                            to='home'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                            onClick={(e) => {e.preventDefault(); history.push('/')}}
                            to='services'
                            smooth={true}
                            duration={600}
                            spy={true}
                            exact='true'
                            offset={-65}
                            >Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            onClick={(e) => {e.preventDefault(); history.push('/')}}
                            to='about'
                            smooth={true}
                            duration={700}
                            spy={true}
                            exact='true'
                            offset={-65}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            onClick={(e) => {e.preventDefault(); history.push('/')}}
                            to='faq'
                            smooth={true}
                            duration={800}
                            spy={true}
                            exact='true'
                            offset={-65}
                            >FAQ</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            onClick={(e) => {e.preventDefault(); history.push('/')}}
                            to='contact'
                            smooth={true}
                            duration={900}
                            spy={true}
                            exact='true'
                            offset={-55}
                            >Contact</NavLinks>
                        </NavItem>
                        {/* <NavItem>
                            <NavLinks to='signup'>Sign Up</NavLinks>
                        </NavItem> */}
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='signin' onClick={toggleSignIn}>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default withRouter(Navbar);
