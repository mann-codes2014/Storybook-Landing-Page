import React from 'react';
import './App.css';
import Hero from "./components/Hero/Hero";
import styled from "@emotion/styled";
import {Tracks} from "./components/Tracks/Tracks";
import {Promotion} from "./components/Promotion/Promotion";

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
            <Promotion/>
        </StyledContainer>
    );
}

export default App;
