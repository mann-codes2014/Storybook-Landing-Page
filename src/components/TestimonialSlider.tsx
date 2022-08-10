import React from 'react';
import styled from "@emotion/styled";
import {Testimonial, TestimonialProps} from "./Testimonial";

interface TestimonialSliderProps {
    testimonials: TestimonialProps[]
}

const StyledTestimonialSlider = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px
`
export const TestimonialSlider = ({
                                      testimonials = []
                                  }: TestimonialSliderProps) => {
    return (
        <StyledTestimonialSlider>
            {testimonials?.map(({avatar,name,message,role}: TestimonialProps, index: number) => <div key={index}><Testimonial
                avatar={avatar} name={name} message={message} role={role}/></div>)}
        </StyledTestimonialSlider>
    );
};