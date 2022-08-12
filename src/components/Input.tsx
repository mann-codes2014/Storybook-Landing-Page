import React from 'react';
import styled from "@emotion/styled";
import {Button} from "./Button";
import svg from '../assets/icons/magnifying-glass.svg'


const StyledInputContainer = styled.div`
  border-radius: 25px;
  padding: 5px;
  width: 100%;
  max-width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 20px 4fr 1fr;
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
type InputProps={}
export const Input = ({}:InputProps) => {
    return (
        <StyledInputContainer>
            <StyledIcon src={svg}/>
            <StyledInput type="text" placeholder='Search for a location...'/>
            <Button label="Continue" primary/>
        </StyledInputContainer>
    );
}

export default Input;