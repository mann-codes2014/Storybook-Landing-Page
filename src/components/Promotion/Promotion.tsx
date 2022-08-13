import React from 'react';
import styled from "@emotion/styled";
import {IMAGES} from "../../assets";
import {SquareIcon} from "../SquareIcon";
import {ReactComponent as HeartsSVG} from "../../assets/icons/hearts.svg";
import {ReactComponent as JigsawSVG} from "../../assets/icons/jigsaw.svg";
import {COLORS} from "../../utils/colors";

const StyledContainer = styled.div`
  padding: 40px;
  position: relative;
  top: 0;
  left: 0;
  margin-top: 40px;
  background-color: #FDF8EE;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;

  .layer3 {
    position: absolute;
    top: 20px;
    left: 60px;
    bottom: -80px;
    height: 100%;
    max-width: 100%;
  }
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
export const StyledItem = styled.div`
  display: grid;
  grid-template-areas: ' icon  title       title'
                         'icon description description'
                         '.    description description';
  grid-row-gap: 2px;
  grid-column-gap: 20px;
  font-family: 'Roboto', sans-serif;
  justify-content: left;

  .icon {
    grid-area: icon;
  }

  .title {
    grid-area: title;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #050C26;
  }

  .description {
    grid-area: description;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 24px;
    color: #8A8A8A;
  }
`

export const Promotion = () => {
    return (
        <StyledContainer>
            <div>
                <img className="layer3" src={IMAGES.promotionBackgroundLayer3} alt=""/>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr'}}>
                <StyledHeading>
                    <span>Premium <span className="last">Learning</span></span>
                    <span>Experience</span>
                </StyledHeading>
                <StyledItem>
                    <SquareIcon className="icon" backgroundColor={COLORS.PRIMARY}>
                        <HeartsSVG/>
                    </SquareIcon>
                    <div className="title">Easily Accessible</div>
                    <p className="description">Learning Will fell Very Comfortable With Courselab.</p>
                </StyledItem>
                <StyledItem>
                    <SquareIcon className="icon" backgroundColor={COLORS.PRIMARY}>
                        <JigsawSVG/>
                    </SquareIcon>
                    <div className="title">Fun learning experience</div>
                    <p className="description">Learning Will fell Very Comfortable With Courslab.</p>
                </StyledItem>
            </div>
        </StyledContainer>
    );
};

