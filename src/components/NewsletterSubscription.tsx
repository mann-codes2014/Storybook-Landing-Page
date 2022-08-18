import React from 'react';
import styled from "@emotion/styled";
import Input from "./Input";
import bulb from '../assets/icons/bulb.svg'

const StyledNewsletterSubscription = styled.div`
  width: auto;
  height: auto;
  position: relative;
  background: #4D2C5E;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  padding: 14px 13px 13px 13px;
  margin: 40px;

  .circle {
    position: absolute;
    top: 0;
    left: 0;
    background: transparent;
    border: 0.1875em solid white;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    clip-path: ellipse(50% 41% at 1% 0%);
  }

  .bulb {
    position: absolute;
    top: 140px;
    right: 80px
  }
`
const StyledBody = styled.div`
  font-family: 'Poppins', sans-serif;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 2px;
  padding: 20px 10px;


  .heading {
    grid-column: 2 / span 1;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    text-align: center;
    margin-bottom: 0;
  }

  .description {
    grid-column: 2 / span 1;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #FFFFFF;
    text-align: center;
  }

  .input {
    grid-column: 2 / span 1;
  }
`
export type NewsletterSubscriptionProps = {
    cover: string;
    category: string;
    rating: number;
    title: string;
    price: string;
    duration: string;
    numberOfCourses: string;
    numberOfSales: string;


}
export const NewsletterSubscription = ({}) => {
    return (
        <StyledNewsletterSubscription>
            {/*<div className="circle"></div>*/}
            <img className="bulb" src={bulb} alt=""/>
            <StyledBody>
                <h4 className="heading">Subscribe to our newsletter</h4>
                <p className="description">Lorem Ipsum is simply dummy text of the printing.</p>
                <div className="input">
                    <Input placeholder="Email Address" isPlaceholderIcon={false} buttonLabel="Send"
                           isPrimaryButton={false}/>
                </div>
            </StyledBody>
        </StyledNewsletterSubscription>
    );
};