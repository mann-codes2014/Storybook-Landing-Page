import React from 'react';
import {Avatar} from "./Avatar";
import styled from "@emotion/styled";

interface TestimonialProps {
    avatar: string;
    name: string;
    role: string;
    message: string;
}

const StyledTestimonial = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px;
  background: #FFFFFF;
  box-shadow: 0 4px 88px rgba(0, 0, 0, 0.05);
  padding: 32px 13px 32px 32px;

  .message {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 156.5%;
    letter-spacing: 0.02em;

    color: #ACACAC;
  }
`
export const Testimonial = ({
                                avatar = 'https://avatars.githubusercontent.com/u/97145056?v=4',
                                name = 'Abdur Rehman',
                                role = 'React Engineer',
                                message = ''
                            }: TestimonialProps) => {
    return (
        <StyledTestimonial>
            <p className="message">“{message}”
            </p>
            <div>
                <Avatar avatar={avatar} name={name}
                        role={role}/>
            </div>
        </StyledTestimonial>
    );
};