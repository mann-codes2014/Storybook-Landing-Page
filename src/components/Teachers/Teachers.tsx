import React from 'react';
import {IMAGES} from "../../assets";
import styled from "@emotion/styled";
import {TeacherList} from "../TeacherList";


const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 40px;

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
export const Teachers = () => {
    return (
        <StyledContainer>
            <span className="heading">Our Teachers</span>
            <p className="description">Lorem Ipsum is simply dummy text of the printing.</p>
            <TeacherList teachers={[
                {
                    cover: IMAGES.teacher1,
                    description: 'Ut enim ad minim veniam, quis nost exercitation\n' +
                        'ullamco laboris nisi ut allquip ex commodo.',
                    name: 'Matthew E. McNatt',
                    designation: 'Professor @George Brown College',
                    course: 'Engineering physics'
                },
                {
                    cover: IMAGES.teacher2,
                    description: 'Ut enim ad minim veniam, quis nost exercitation\n' +
                        'ullamco laboris nisi ut allquip ex commodo.',
                    name: 'Tracy D. Wright',
                    designation: 'Professor @George Brown College',
                    course: 'Engineering physics'
                }, {
                    cover: IMAGES.teacher3,
                    description: 'Ut enim ad minim veniam, quis nost exercitation\n' +
                        'ullamco laboris nisi ut allquip ex commodo.',
                    name: 'Cynthia A. Nelson',
                    designation: 'Professor @George Brown College',
                    course: 'Engineering physics'
                }
            ]}/>
        </StyledContainer>
    );
};
