import React from 'react';
import styled from "@emotion/styled";
import {IMAGES} from "../../assets";
import Navbar from "./Navbar";
import Input from "../Input";
import {Banner} from "./Banner";

type StyledContainerProps = {
    layer1: string;
    layer2: string;
    layer3: string;
    layer4: string;

}
const StyledContainer = styled.div<StyledContainerProps>`
  position: relative;
  top: 0;
  left: 0;

  .layer1 {
    position: relative;
    top: 0;
    left: 0;
    object-fit: cover;
    max-width: 100%;
  }

  .layer2 {
    position: absolute;
    top: 90px;
    left: 0;
    object-fit: cover;
    max-width: 100%;
  }

  .layer3 {
    position: absolute;
    //top: 160px;
    right: 0;
    object-fit: cover;
    max-width: 100%;
  }

  .layer4 {
    position: absolute;
    top: 40px;
    right: 70px;
    object-fit: cover;
    max-width: 100%;
    height: 450px;
  }

  & > .navbar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

`
const StyledBodyContainer = styled.div`
  position: absolute;
  top: 160px;
  right: 90px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 200px;
`
const StyledSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 60px;
`
const StyledHeading = styled.h1`
  color: black;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 50px;

  & > span {
    display: block;
  }

  span.last {
    color: #FF7426;
  }
`
const StyledMissionStatement = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #8A8A8A;
`
export const Hero = () => {
    return (
        <StyledContainer layer1={IMAGES.heroBackgroundLayer1} layer2={IMAGES.heroBackgroundLayer2}
                         layer3={IMAGES.heroBackgroundLayer3} layer4={IMAGES.heroBackgroundLayer4}>
            <img className="layer1" src={IMAGES.heroBackgroundLayer1} alt=""/>
            <img className="layer2" src={IMAGES.heroBackgroundLayer2} alt=""/>
            <StyledBodyContainer>
                <StyledSection>
                    <StyledHeading>
                        <span>The <span className="last">Smart</span></span>
                        <span>Choice For <span className="last">Future</span></span>
                    </StyledHeading>
                    <StyledMissionStatement>Elearn is a global training provider based across the UK that specialises in
                        accredited and bespoke
                        training courses. We crush the...</StyledMissionStatement>
                    <Input/>
                </StyledSection>
                <div>
                    <img className="layer3" src={IMAGES.heroBackgroundLayer3} alt=""/>
                    <img className="layer4" src={IMAGES.heroBackgroundLayer4} alt=""/>
                </div>
            </StyledBodyContainer>
            <div style={{
                left: '8%',
                right: '8%',
                bottom: '-100px',
                position: 'absolute',
                // transform: 'translateX(-30%)'
            }}>
                <Banner/>
            </div>
            <Navbar className={'navbar'}/>
        </StyledContainer>
    );
}

export default Hero;