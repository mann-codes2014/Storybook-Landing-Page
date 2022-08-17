import React from 'react';
import styled from "@emotion/styled";
import {TestimonialSlider} from "../TestimonialSlider";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 40px;
  margin-bottom: 40px;

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
export const Testimonials = () => {
    return (
        <StyledContainer>
            <span className="heading">What student’s say</span>
            <p className="description">Lorem Ipsum is simply dummy text of the printing.</p>

            <TestimonialSlider testimonials={[{
                avatar: 'https://avatars.githubusercontent.com/u/97145056?v=4',
                name: 'Danish Alam',
                role: 'Full Stack Engineer',
                message: 'Teachings of the great explore of truth, \n' +
                    'the master-builder of human happiness. \n' +
                    'no one rejects,dislikes, or avoids pleasure \n' +
                    'itself, pleasure itself'
            }, {
                avatar: 'https://avatars.githubusercontent.com/u/97145056?v=4',
                name: 'Abdur Rehman',
                role: 'Full Stack Engineer',
                message: 'Teachings of the great explore of truth, \n' +
                    'the master-builder of human happiness. \n' +
                    'no one rejects,dislikes, or avoids pleasure \n' +
                    'itself, pleasure itself'
            }, {
                avatar: 'https://avatars.githubusercontent.com/u/97145056?v=4',
                name: 'Muhammad Usman',
                role: 'Full Stack Engineer',
                message: 'Teachings of the great explore of truth, \n' +
                    'the master-builder of human happiness. \n' +
                    'no one rejects,dislikes, or avoids pleasure \n' +
                    'itself, pleasure itself'
            },
                {
                    avatar: 'https://avatars.githubusercontent.com/u/97145056?v=4',
                    name: 'Ishtiaq Ismail',
                    role: 'Government Officer',
                    message: 'Teachings of the great explore of truth, \n' +
                        'the master-builder of human happiness. \n' +
                        'no one rejects,dislikes, or avoids pleasure \n' +
                        'itself, pleasure itself'
                }, {
                    avatar: 'https://avatars.githubusercontent.com/u/97145056?v=4',
                    name: 'Raja Ammad',
                    role: 'Data Scientist',
                    message: 'Teachings of the great explore of truth, \n' +
                        'the master-builder of human happiness. \n' +
                        'no one rejects,dislikes, or avoids pleasure \n' +
                        'itself, pleasure itself'
                }]}/>
        </StyledContainer>
    );
};
