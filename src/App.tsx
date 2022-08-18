import React from 'react';
import './App.css';
import Hero from "./components/Hero/Hero";
import styled from "@emotion/styled";
import {Tracks} from "./components/Tracks/Tracks";
import {Promotion} from "./components/Promotion/Promotion";
import {Testimonials} from "./components/Testimonials/Testimonials";
import {Teachers} from "./components/Teachers/Teachers";
import {NewsletterSubscription} from "./components/NewsletterSubscription";

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
            <Testimonials/>
            <Teachers/>
            <NewsletterSubscription/>
        </StyledContainer>
    );
}

export default App;
