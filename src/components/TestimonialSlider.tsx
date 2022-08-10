import React from 'react';
import {Testimonial, TestimonialProps} from "./Testimonial";
import CustomCarousel from "./CustomCarousel";

interface TestimonialSliderProps {
    testimonials: TestimonialProps[]
}

export const TestimonialSlider = ({
                                      testimonials = []
                                  }: TestimonialSliderProps) => {
    return (
        <CustomCarousel>
            {testimonials?.map(({avatar, name, message, role}: TestimonialProps, index: number) => <div key={index}>
                <Testimonial
                    avatar={avatar} name={name} message={message} role={role}/></div>)}
        </CustomCarousel>
    );
};