import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

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

function DOMExplorerCSS() {
    const [cssInput, setCssInput] = useState('');
    const outputRef = useRef(null); // Ref for auto-scrolling output

    // --- CSS Live Editor ---
    useEffect(() => {
        let styleTag = document.getElementById('domview-live-style');
        if (!styleTag) {
            styleTag = document.createElement('style');
            styleTag.id = 'domview-live-style';
            document.head.appendChild(styleTag);
        }
        styleTag.textContent = cssInput;
    }, [cssInput]); // Re-run when cssInput changes

    const handleCssChange = (e) => {
        setCssInput(e.target.value);
    };


    return (
       <TerminalInput
            value={cssInput}
            onChange={handleCssChange}
            placeholder="e.g., body { background-color: #2a2a2a; color: #eee; }"
            spellCheck="false"
        />
    );
}

export default DOMExplorerCSS;