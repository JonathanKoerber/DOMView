import React from "react";
import styled from "styled-components";

const AsidesWrapper = styled.div`
    float: right;
    width: 33.33%;
    box-sizing: border-box;
`;

const Aside = ({ children }) => (
    <AsidesWrapper>
        {children}
    </AsidesWrapper>
);

export default Aside;