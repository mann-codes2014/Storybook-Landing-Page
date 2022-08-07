import React from 'react';
import styled from "@emotion/styled";
import {IMAGES} from "../assets";
import {Rating} from "./Rating";
import {ReactComponent as CameraSVG} from '../assets/icons/camera.svg';
import {ReactComponent as ClockSVG} from '../assets/icons/clock.svg';
import {ReactComponent as DownloadSVG} from '../assets/icons/download.svg';

type StyledTrackProps = {
    backgroundImage: string;
}
const StyledTrack = styled.div<StyledTrackProps>`
  width: 490px;

  background: #FFFFFF;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  padding: 14px 13px 13px 13px;

  .cover {
    background-image: url(${props => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: 100% 98%;
    object-fit: cover;
    height: 238px;
  }
`
const StyledBody = styled.div`
  display: grid;
  grid-template-areas:
    'category category rating'
    'title title title'
    'price price price';
  justify-content: space-between;

  .category {
    grid-area: category;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    color: #ACACAC;
  }

  .rating {
    grid-area: rating;
  }

  .title {
    grid-area: title;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #000000;
  }

  .price {
    grid-area: price;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    color: #FF7426;
  }
`
const StyledFooter = styled.div`

  border-top: 1px dashed #ACACAC;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 12px;
  margin-top: 5px;

  .footer-item {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 5px;

    .text {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 20px;
      color: #ACACAC;
    }
  }
`

export const Track = ({}) => {
    return (
        <StyledTrack backgroundImage={IMAGES.track}>
            <div className="cover"/>
            <StyledBody>
                <div className="category">UI/UX Design</div>
                <div className="rating">
                    <Rating value={3}/>
                </div>
                <div className="title">UI/UX Design for Beginners</div>
                <div className="price">$98</div>
            </StyledBody>
            <StyledFooter>
                <div className="footer-item">
                    <ClockSVG/>
                    <span className="text">22hr 30min</span>
                </div>
                <div className="footer-item">
                    <CameraSVG/>
                    <span className="text">34 Courses</span>
                </div>
                <div className="footer-item">
                    <DownloadSVG/>
                    <span className="text">250 Sales</span>
                </div>
            </StyledFooter>
        </StyledTrack>
    );
};