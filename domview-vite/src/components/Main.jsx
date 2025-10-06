import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`

    border: 1px solid #d3d3d3;
    display: flex;
    padding: 16px;
    border-radius: 4px;
    width: 80vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    overflow: auto;
    border: 2px solid #888;
    text-align: left;

    h2 {
        margin-top: 0;
        color: #333;
    }
    
    p {
        max-width: 600px;
        line-height: 1.5;
        margin-bottom: 16px;
        text-align: left;
    }
`;
const Main = ({ children }) => {
    return (
        <StyledMain>
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
        </StyledMain>
    );
};

export default Main;