import React from 'react';
import styled from '@emotion/styled'
import {COLORS} from "../utils/colors";

interface ButtonProps {
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
}

interface StyledButtonProps {
    primary: boolean
    size: 'small' | 'medium' | 'large';
}

const StyledButton = styled.button<StyledButtonProps>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 3px solid white;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: white;
  background-color: ${props => (props.primary ? COLORS.PRIMARY : COLORS.SECONDARY)};
  font-size: ${props => (props.size === 'large' ? '16px' : props.size === 'medium' ? '14px' : '12px')};
  padding: ${props => (props.size === 'large' ? '12px 24px' : props.size === 'medium' ? '11px 20px' : '10px 16px')};
  height: 100%;

  &:hover {
    border: 3px solid ${props => (props.primary ? COLORS.PRIMARY : COLORS.SECONDARY)};
    background-color: white;
    color: ${props => (props.primary ? COLORS.PRIMARY : COLORS.SECONDARY)};
    transition: background-color 350ms;
  }
`
export const Button = ({
                           primary = false,
                           size = 'medium',
                           label,
                           onClick = () => {
                           }
                       }: ButtonProps) => {
    return (
        <StyledButton
            type="button"
            primary={primary}
            size={size}
            onClick={onClick}
        >
            {label}
        </StyledButton>
    );
};
