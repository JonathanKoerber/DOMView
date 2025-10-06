import React from 'react';
import styled from 'styled-components';

const ArticlesWrapper = styled.article`
    float: left;
    width: 66.66%;
    box-sizing: border-box;
    padding-right: 1rem;
`;

const Article = ({ children }) => (
    <ArticlesWrapper>
        {children}
    </ArticlesWrapper>
);

export default Article;