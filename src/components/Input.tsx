import React from 'react';
import styled from "@emotion/styled";
import {Button} from "./Button";
import svg from '../assets/icons/magnifying-glass.svg'

type StyledInputContainerProps = {
    isPlaceholderIcon: boolean;
}
const StyledInputContainer = styled.div<StyledInputContainerProps>`
  border-radius: 25px;
  padding: 5px;
  width: 100%;
  max-width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: ${props => (props.isPlaceholderIcon === true ? '20px 4fr 1fr' : '4fr 1fr')};
  gap: 5px;
  align-items: center;
  background-color: white;
`
const StyledIcon = styled.img<any>`
  object-fit: cover;
  width: 20px;
  height: auto;
`
const StyledInput = styled.input<any>`
  border: 0;
  outline: none;

  &::placeholder {
    color: #0F335E;
    font-weight: bold;
  }

`
type InputProps = {
    placeholder?: string;
    isPlaceholderIcon?: boolean;
    buttonLabel: string;
    isPrimaryButton?: boolean
}
export const Input = ({
                          placeholder = 'Search for a location...',
                          isPlaceholderIcon = true,
                          buttonLabel = 'Continue',
                          isPrimaryButton = true
                      }: InputProps) => {
    return (
        <StyledInputContainer isPlaceholderIcon={isPlaceholderIcon}>
            {isPlaceholderIcon && <StyledIcon src={svg}/>}
            <StyledInput type="text" placeholder={placeholder}/>
            <Button label={buttonLabel} primary={isPrimaryButton}/>
        </StyledInputContainer>
    );
}

export default Input;