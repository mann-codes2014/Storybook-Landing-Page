import React from 'react';
import Hero from "./components/Hero/Hero";
import styled from "@emotion/styled";
import {Tracks} from "./components/Tracks/Tracks";
import {Promotion} from "./components/Promotion/Promotion";
import {Testimonials} from "./components/Testimonials/Testimonials";
import {Teachers} from "./components/Teachers/Teachers";
import {NewsletterSubscription} from "./components/NewsletterSubscription";
import {Footer} from "./components/Footer";
import {MediaContextProvider} from './components/media-context-provider';

const StyledContainer = styled.div`
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
`

function App() {
    return (
        <MediaContextProvider>
            <StyledContainer>
                <Hero/>
                {/*<Tracks/>*/}
                {/*<Promotion/>*/}
                {/*<Testimonials/>*/}
                {/*<Teachers/>*/}
                {/*<NewsletterSubscription/>*/}
                {/*<Footer/>*/}
            </StyledContainer>
        </MediaContextProvider>
    );
}

export default App;
