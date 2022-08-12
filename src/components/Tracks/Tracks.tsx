import React from 'react';
import styled from "@emotion/styled";
import {TrackList} from "../TrackList";
import {IMAGES} from "../../assets";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 180px;

  & > .heading {
    text-align: center;
    font-family: 'Jost', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 46px;
    text-transform: capitalize;
    color: #000000;
  }

  & > .description {
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #8A8A8A;
  }
`
export const Tracks = () => {
    return (
        <StyledContainer>
            <span className="heading">Our Tracks</span>
            <p className="description">Lorem Ipsum is simply dummy text of the printing.</p>

            <TrackList tracks={[{
                cover: IMAGES.track,
                category: 'UI/UX Design',
                rating: 4,
                title: 'UI/UX Design for Beginners',
                price: '$98',
                duration: '22hr 30min',
                numberOfSales: '34 Courses',
                numberOfCourses: '250 Sales',
            }, {
                cover: IMAGES.track2,
                category: 'UI/UX Design',
                rating: 4,
                title: 'UI/UX Design for Beginners',
                price: '$98',
                duration: '22hr 30min',
                numberOfSales: '34 Courses',
                numberOfCourses: '250 Sales',
            }, {
                cover: IMAGES.track3,
                category: 'UI/UX Design',
                rating: 4,
                title: 'UI/UX Design for Beginners',
                price: '$98',
                duration: '22hr 30min',
                numberOfSales: '34 Courses',
                numberOfCourses: '250 Sales',
            }]}/>
        </StyledContainer>
    );
};
