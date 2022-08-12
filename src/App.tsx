import React from 'react';
import './App.css';
import Hero from "./components/Hero/Hero";
import styled from "@emotion/styled";
import {Tracks} from "./components/Tracks/Tracks";

const StyledContainer = styled.div`
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
`

function App() {
    return (
        <StyledContainer>
            <Hero/>
            <Tracks/>
        </StyledContainer>
    );
}

export default App;
