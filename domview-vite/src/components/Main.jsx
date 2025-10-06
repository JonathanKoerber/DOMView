import React from 'react';
import styled from 'styled-components';
const OffsetWrapper = styled.div`
    margin-top: 15vh;
    width: 100%;
`;
// src/components/Main.jsx
const StyledMain = styled.main`
    /* Default: Mobile first */
    width: 100vw;
    max-width: 100vw;
    padding: 16px;
    border-radius: 4px;
    border: 2px solid #888;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    overflow: auto;
    text-align: left;

    /* Tablet */
    @media (min-width: 600px) and (max-width: 1023px) {
        width: 90vw;
        max-width: 900px;
        padding: 24px;
    }

    /* Split screen (large tablet/small desktop) */
    @media (min-width: 1024px) and (max-width: 1439px) {
        width: 60vw;
        max-width: 1200px;
        padding: 32px;
    }

    /* Desktop */
    @media (min-width: 1440px) {
        width: 100vw;
        max-width: 1500px;
        padding: 40px;
    }

    h2 {
        margin-top: 0;
        color: #333;
    }

    p {
        width: 75%;
        line-height: 1.5;
        margin: 16px;
        text-align: left;
    }
`;
const Main = ({ children }) => {
    return (
        
        <StyledMain>
        <OffsetWrapper>
            <h2>Getting Started!</h2>
            <p>
                To get started coding with AI tools like Co-Pilot, we need to
                understand the context that we are working in. This is not so
                much a traditional tutorial but rather a jumping off point for
                you to explore how working in a GitHub Codespace can help you
                build code with the AI Coding assistant Co-Pilot.
            </p>
            <p>
                Click on the different sections around the screen. They will
                flip to reveal their code. There you can see that we are using
                semantic HTML to structure our document. If you're interested in
                more info about semantic tags, check{' '}
                <a
                    target='_blank'
                    href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML"
                >
                    Mozilla docs
                </a>
                .
            </p>
            <p>
                You can see that this description is a Main tag. This is the
                main container that holds content on the page.
            </p>
            {children}
        </OffsetWrapper>
        </StyledMain>


    );
};

export default Main;