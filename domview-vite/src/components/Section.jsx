import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    padding: 1.5rem;
    margin: 1rem 0;
    background: #f9f9f9;
    border-radius: 8px;

    p {
        margin-bottom: 1rem;
        color: #333;
        line-height: 1.6;
    }
`;

const Section = ({ ps = [], figure }) => (
    <StyledSection>
        {ps.map((p, idx) => (
            <p key={idx}>
                {p}
            </p>
        ))}
        {figure}
    </StyledSection>
);

export default Section;