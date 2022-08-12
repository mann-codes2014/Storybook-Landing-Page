import React from 'react';
import styled from "@emotion/styled";
import logo from '../../assets/icons/logo.svg'
import {Button} from "../Button";
import {COLORS} from "../../utils/colors";

type StyledContainerProps = {
}
type NavbarProps = {
    className:string
}
const StyledContainer = styled.div<StyledContainerProps>`
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
`
const StyledNavigationContainer = styled.nav<StyledContainerProps>`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  gap: 10px;
`
const StyledNavigationLink = styled.div<StyledContainerProps>`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #1D1D1D;
  text-align: center;

  &:hover {
    background-color: ${() => COLORS.PRIMARY};
    color: white;
    border-radius: 3em;
    padding: 10px 16px;
    cursor: pointer;
  }
`
export const Navbar = ({className}:NavbarProps) => {
    return (
        <StyledContainer className={className}>
            <div >
                <img src={logo} alt="Logo"/>
            </div>
            <div>
                <StyledNavigationContainer>
                    <StyledNavigationLink>Home</StyledNavigationLink>
                    <StyledNavigationLink>About Us</StyledNavigationLink>
                    <StyledNavigationLink>Courses</StyledNavigationLink>
                    <StyledNavigationLink>Our Service</StyledNavigationLink>
                    <StyledNavigationLink>Contact Us</StyledNavigationLink>
                    <span>
                        <Button label={'Sign In'} primary/>
                    </span>

                </StyledNavigationContainer>

            </div>
        </StyledContainer>
    );
}

export default Navbar;