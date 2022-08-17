import React from 'react';
import styled from "@emotion/styled";
import {ReactComponent as LinkedinSVG} from '../assets/icons/linkedin.svg';
import {ReactComponent as InstagramSVG} from '../assets/icons/instagram.svg';


type StyledTeacherProps = {
    backgroundImage: string;
}
const StyledTeacher = styled.div<StyledTeacherProps>`
  width: auto;
  position: relative;
  background: #FFFFFF;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  padding: 14px 13px 13px 13px;
  font-family: 'Poppins', sans-serif;

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
    'name name name'
    'designation designation designation'
    'description description description';
  justify-content: space-between;

  .name {
    grid-area: name;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    color: #000000;
  }

  .designation {
    grid-area: designation;
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 20px;
    color: #919090;
  }

  .description {
    grid-area: description;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #ACACAC;
  }
`
const StyledFooter = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 12px;
  margin-top: 5px;
  margin-bottom: 10px;

  .course {
    flex-grow: 1;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 23px;
    color: #FF7426;
  }

  .link-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;

    .link {
      background: #F9F9F9;
      padding: 5px;

      &:hover {
        cursor: pointer;
        outline: 1px solid blue;
      }
    }
  }
`
export type TeacherProps = {
    cover: string;
    name: string;
    designation: string;
    description: string;
    course: string;
}
export const Teacher = ({
                            cover,
                            name,
                            designation,
                            description,
                            course
                        }: TeacherProps) => {
    return (
        <StyledTeacher backgroundImage={cover}>
            <div className="cover"/>
            <StyledBody>
                <div className="name">{name}</div>
                <div className="designation">{designation}</div>
                <div className="description">{description}</div>
            </StyledBody>
            <StyledFooter>
                <div className="course">
                    <span>{course}</span>
                </div>
                <div className="link-container">
                    <div className="link">
                        <LinkedinSVG/>
                    </div>
                    <div className="link">
                        <InstagramSVG/>
                    </div>
                </div>

            </StyledFooter>
        </StyledTeacher>
    );
};