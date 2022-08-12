import React from 'react';
import styled from "@emotion/styled";

interface SquareIconProps {
    backgroundColor: string;
    children: any
    className?: string
}

interface StyledSquareIconProps {
    backgroundColor: string;
}

const StyledSquareIcon = styled.div<StyledSquareIconProps>`
  width: fit-content;
  border-radius: 23px;
  padding: 10px;
  position: relative;
  background-color: ${props => props.backgroundColor};
  height: auto;

  div {
    z-index: 100;
    position: relative;
  }
`
export const SquareIcon = ({
                               backgroundColor,
                               children,
                               className = ''
                           }: SquareIconProps) => {
    return (
        <StyledSquareIcon className={className} backgroundColor={backgroundColor}>
            <div>{children}</div>
        </StyledSquareIcon>
    );
};
