import React, {ReactNode} from 'react';
import styled from "@emotion/styled";
import logo from "../assets/icons/logo.svg";
import {FOOTER_LINKS} from "../utils/constants";

const StyledContainer = styled.div`
  background: #FDF8EE;
  padding: 10px 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`
const StyledLinksContainer = styled.div`
  background: #FDF8EE;
  padding: 10px 20px;
  display: grid;
  grid-template-columns: 1fr;
  font-family: 'Roboto', sans-serif;

  .heading {
    font-style: normal;
    font-weight: 600;
    font-size: 21px;
    line-height: 25px;
    color: #00052E;
  }

  a.link {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #606060;
    text-decoration: none;
  }
`
type LinkGroupProps = {
    heading: string;
    children: ReactNode;
}
const LinksGroup = ({heading, children}: LinkGroupProps) => <StyledLinksContainer>
    <strong className="heading">{heading}</strong>
    {children}
</StyledLinksContainer>
export const Footer = () => {
    return (
        <StyledContainer>
            <div>
                <img src={logo} alt="Logo"/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy a type specimen book.</p>
            </div>
            <LinksGroup heading="Company">
                {FOOTER_LINKS.COMPANY?.map(({route, label}, index) => <a href={route} key={index}
                                                                         className="link">{label}</a>)}

            </LinksGroup>
            <LinksGroup heading="Courses">
                {FOOTER_LINKS.COURSES?.map(({route, label}, index) => <a href={route} key={index}
                                                                         className="link">{label}</a>)}
            </LinksGroup>
            <LinksGroup heading="Support">
                {FOOTER_LINKS.SUPPORT?.map(({route, label}, index) => <a href={route} key={index}
                                                                         className="link">{label}</a>)}
            </LinksGroup>
            <LinksGroup heading="Contact Info"
            >
                <a href={`tel:${FOOTER_LINKS.CONTACT_INFO[0].route}`}
                   className="link">{FOOTER_LINKS.CONTACT_INFO[0].label}</a>
                <a href={`mailto:${FOOTER_LINKS.CONTACT_INFO[1].route}`}
                   className="link">{FOOTER_LINKS.CONTACT_INFO[1].label}</a>
                <address
                    className="link">{FOOTER_LINKS.CONTACT_INFO[2].label}
                </address>
            </LinksGroup>

        </StyledContainer>
    );
};

