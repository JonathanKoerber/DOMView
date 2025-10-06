import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const TerminalInput = styled.textarea`
    background: #1e1e1e;
    color: #d4d4d4;
    border: none;
    border-radius: 4px;
    padding: 10px 12px;
    font-family: 'Fira Mono', 'Consolas', 'Monaco', monospace;
    font-size: 1rem;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    min-height: calc(1.5em * 6 + 24px); /* 6 lines + padding */
    resize: vertical;
    line-height: 1.5em;
`;
const SubmitButton = styled.button`
    background: #007acc;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    font-family: 'Fira Mono', 'Consolas', 'Monaco', monospace;
    font-size: 1rem;
    margin-top: 8px;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
        background: #005fa3;
    }
`;

const handleChange = (e) => {
    const cssRule = e.target.value;
    // Remove any previously injected style tag
    let styleTag = document.getElementById('domview-live-style');
    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = 'domview-live-style';
        document.head.appendChild(styleTag);
    }
    styleTag.textContent = cssRule;
};
const [content, setContent] = useState('');

const onChange = (e) => {
    setContent(e.target.value);

};
const handleButtonClick = (e) => {
    handleChange({ target: { value: content } });
    setContent('');
};
const Input = ({ value, onChange, ...props }) => {
    return (
        <>
        <TerminalInput
            rows={5}
            value={value}
            onChange={onChange}
            {...props}
        />
        <SubmitButton onClick={handleButtonClick}>Submit</SubmitButton>
        </>
    );
};

export default Input;