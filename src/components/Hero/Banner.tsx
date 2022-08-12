import React from 'react';
import styled from "@emotion/styled";
import {SquareIcon} from "../SquareIcon";
import {ReactComponent as ExamSVG} from "../../assets/icons/exam.svg";
import {ReactComponent as MonitorSVG} from "../../assets/icons/monitor.svg";
import {ReactComponent as CertificationSVG} from "../../assets/icons/certification.svg";


const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: #4D2C5E;
  border-radius: 14px;
`
const StyledItem = styled.div`
  display: grid;
  grid-template-areas: ' icon title       title'
                         'icon description description'
                         '. description description';
  grid-row-gap: 2px;
  grid-column-gap: 25px;
  font-family: 'Roboto', sans-serif;
  padding: 40px 35px;

  .icon {
    grid-area: icon;
  }

  .title {
    grid-area: title;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
  }

  .description {
    grid-area: description;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.6);
  }
`
export const Banner = () => {
    return (
        <StyledContainer>
            <StyledItem key={1}>
                <SquareIcon className="icon" backgroundColor={'#FFFFFF33'}>
                    <MonitorSVG/>
                </SquareIcon>
                <div className="title">Learn The Latest Skills</div>
                <p className="description">Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                    roots in a BC, making it
                    over 2000 years old.</p>
            </StyledItem>
            <StyledItem key={2}>
                <SquareIcon className="icon" backgroundColor={'#FFFFFF33'}>
                    <ExamSVG/>
                </SquareIcon>
                <div className="title">Get Ready For a Career</div>
                <p className="description">Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                    roots in a BC, making it
                    over 2000 years old.</p>
            </StyledItem>
            <StyledItem key={3}>
                <SquareIcon className="icon" backgroundColor={'#FFFFFF33'}>
                    <CertificationSVG/>
                </SquareIcon>
                <div className="title">Earn a Certificate</div>
                <p className="description">Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                    roots in a BC, making it
                    over 2000 years old.</p>
            </StyledItem>
        </StyledContainer>
    );
};
