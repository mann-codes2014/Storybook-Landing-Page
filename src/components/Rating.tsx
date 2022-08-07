import React, {useState} from 'react';
import styled from "@emotion/styled";
import {COLORS} from "../utils/colors";

interface RatingProps {
    value: number
}

const StyledRating = styled.div`
  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;

    &.on {
      color: ${COLORS.SECONDARY};
    }

    &.off {
      color: ${COLORS.LIGHT_ORANGE};
    }
    .star{
      font-size: 16px;
    }
  }
`

export const Rating = ({
                           value = 0
                       }: RatingProps) => {
    const [rating, setRating] = useState(value);
    const [hover, setHover] = useState(0);
    return (
        <StyledRating>
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        <span className="star">&#9733;</span>
                    </button>
                );
            })}
        </StyledRating>
    );
};
