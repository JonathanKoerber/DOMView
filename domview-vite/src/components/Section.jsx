import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    display: flex;
    flex-direction: row;
    padding: 1.5rem;
    margin: 1rem 0;
    background: #f7f4f4ff;
    border-radius: 8px;
    border: 1px solid #ddd;
    spacing: 1.5rem;
    space-between: 1.5rem;
    overflow: auto;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.06);

    p {
        margin-bottom: 1rem;
        color: #333;
        line-height: 1.6;
    }
`;

const StyledColumnSection = styled.section`
    display: flex;
    flex-direction: column;
    spacing: 1.5rem;
    space-between: 1.5rem;
    background: #f7f4f4ff;
    padding: 1.5rem;
    margin: 1rem 0;
    border-radius: 8px;
    border: 1px solid #ddd;
    overflow: auto;
    p {
        margin-bottom: 1rem;
        color: #333;
        line-height: 1.6;
    }
`;

export const Section = ({ children}) => (
    <StyledSection>
    {children}
    </StyledSection>
);
export const SectionColumn = ({ children }) => (
    <StyledColumnSection>
        {children}
    </StyledColumnSection>
);
export default Section;