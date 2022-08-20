import React, {useState} from 'react';
import styled from "@emotion/styled";
import logo from '../../assets/icons/logo.svg'
import {Button} from "../Button";
import {COLORS} from "../../utils/colors";
import {Media} from '../media-context-provider';
import {CSSTransition} from "react-transition-group";
import {Hamburger} from "../Hamburger";

type StyledContainerProps = {}
type NavbarProps = {
    className: string
}
const StyledDesktopHeader = styled.header<StyledContainerProps>`
  display: grid;
  grid-template-areas: 'logo nav';

  .nav {
    grid-area: nav;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
    justify-items: center;
  }
`
const StyledMobileHeader = styled.header<StyledContainerProps>`
  padding: 2px 5px;
  display: grid;
  grid-template-areas: 'logo burger'
'nav nav';

  .nav {
    grid-area: nav;
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: none;
    grid-row-gap: 20px;
  }

  .nav-animation-enter {
    opacity: 0;
    transform: scale(0.5);
  }

  .nav-animation-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 350ms, transform 350ms;
  }

  .nav-animation-exit {
    opacity: 1;
  }

  .nav-animation-exit-active {
    opacity: 0;
    transform: scale(0.5);
    transition: opacity 350ms, transform 350ms;
  }

  .hamburger-container {
    display: flex;
    align-items: center;
    justify-content: center
  }
`
const StyledNavigationLink = styled.a<StyledContainerProps>`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #1D1D1D;
  text-align: center;
  padding: 10px 16px;

  &:hover {
    background-color: ${() => COLORS.PRIMARY};
    color: white;
    border-radius: 3em;
    cursor: pointer;
    transition: background-color 1050ms;
  }
`
export const Navbar = ({className}: NavbarProps) => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    return (
        <div>
            <Media lessThan='md'>
                <StyledMobileHeader className={className}>
                    <div>
                        <img src={logo} alt="Logo"/>
                    </div>
                    <CSSTransition in={isNavVisible} timeout={350}
                                   classNames="nav-animation"
                                   unmountOnExit>
                        <nav className="nav">
                            <StyledNavigationLink>Home</StyledNavigationLink>
                            <StyledNavigationLink>About Us</StyledNavigationLink>
                            <StyledNavigationLink>Courses</StyledNavigationLink>
                            <StyledNavigationLink>Our Service</StyledNavigationLink>
                            <StyledNavigationLink>Contact Us</StyledNavigationLink>
                            <Button label={'Sign In'} primary/>
                        </nav>
                    </CSSTransition>

                    <div className="hamburger-container"
                         onClick={() => setIsNavVisible(state => !state)}>
                        <Hamburger isburger={!isNavVisible}/>
                    </div>
                </StyledMobileHeader>
            </Media>
            <Media greaterThanOrEqual='md'>
                <StyledDesktopHeader className={className}>
                    <div>
                        <img src={logo} alt="Logo"/>
                    </div>
                    <nav className="nav">
                        <StyledNavigationLink>Home</StyledNavigationLink>
                        <StyledNavigationLink>About Us</StyledNavigationLink>
                        <StyledNavigationLink>Courses</StyledNavigationLink>
                        <StyledNavigationLink>Our Service</StyledNavigationLink>
                        <StyledNavigationLink>Contact Us</StyledNavigationLink>
                        <span>
                        <Button label={'Sign In'} primary/>
                    </span>

                    </nav>
                </StyledDesktopHeader>
            </Media>
        </div>
    );
}

export default Navbar;