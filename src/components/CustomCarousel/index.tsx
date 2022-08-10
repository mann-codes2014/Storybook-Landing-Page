import React, {ReactNode} from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 3000},
        items: 5
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1
    }
};

interface CustomCarouselPropTypes {
    children: ReactNode
}

export const CustomCarousel = ({children}: CustomCarouselPropTypes) => {
    return (
        <Carousel infinite={true} showDots={true} responsive={responsive}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                  partialVisible={false}
        >
            {children}
        </Carousel>
    );
}
export default CustomCarousel