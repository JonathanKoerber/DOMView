import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 15vh;
    background: #222;
    color: #fff;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
`;

const Header = ({ children }) => (
    <StyledHeader>
        {children}
    </StyledHeader>
);

export default Header;
