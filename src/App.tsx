import React from 'react';
import './App.css';
import Hero from "./components/Hero/Hero";
import styled from "@emotion/styled";

const StyledContainer = styled.div`
  padding: 0;
`

function App() {
    return (
        <StyledContainer>
            <Hero/>
        </StyledContainer>
    );
}

export default App;
