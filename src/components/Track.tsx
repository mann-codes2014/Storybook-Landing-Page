import React from 'react';
import styled from "@emotion/styled";
import {Rating} from "./Rating";
import {ReactComponent as CameraSVG} from '../assets/icons/camera.svg';
import {ReactComponent as ClockSVG} from '../assets/icons/clock.svg';
import {ReactComponent as DownloadSVG} from '../assets/icons/download.svg';
import {Button} from "./Button";

type StyledTrackProps = {
    backgroundImage: string;
}
const StyledTrack = styled.div<StyledTrackProps>`
  width: 490px;
  position: relative;
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
  margin-bottom: 10px;

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
const StyledCTA = styled.div`
  left: 50%;
  bottom: -20px;
  position: absolute;
  transform: translateX(-50%);
`
export type TrackProps = {
    cover: string;
    category: string;
    rating: number;
    title: string;
    price: string;
    duration: string;
    numberOfCourses: string;
    numberOfSales: string;


}
export const Track = ({
                          cover,
                          category,
                          rating,
                          title,
                          price,
                          duration,
                          numberOfCourses,
                          numberOfSales,
                      }: TrackProps) => {
    return (
        <StyledTrack backgroundImage={cover}>
            <div className="cover"/>
            <StyledBody>
                <div className="category">{category}</div>
                <div className="rating">
                    <Rating value={rating}/>
                </div>
                <div className="title">{title}</div>
                <div className="price">{price}</div>
            </StyledBody>
            <StyledFooter>
                <div className="footer-item">
                    <ClockSVG/>
                    <span className="text">{duration}</span>
                </div>
                <div className="footer-item">
                    <CameraSVG/>
                    <span className="text">{numberOfCourses}</span>
                </div>
                <div className="footer-item">
                    <DownloadSVG/>
                    <span className="text">{numberOfSales}</span>
                </div>
            </StyledFooter>
            <StyledCTA>
                <Button label="Join Course"/>
            </StyledCTA>
        </StyledTrack>
    );
};