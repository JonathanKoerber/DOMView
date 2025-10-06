import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
const TerminalContainer = styled.div`
    background: #1a202c;
    color: #f7fafc;
    padding: 1.5rem;
    border-radius: 0.5rem;
`;

const Label = styled.label`
    display: block;
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #fdba74;
`;

const Form = styled.form`
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
`;

const Input = styled.input`
    flex-grow: 1;
    padding: 0.5rem;
    background: #2d3748;
    border: 1px solid #4a5568;
    border-radius: 0.375rem;
    color: #e2e8f0;
    outline: none;
    &:focus {
        box-shadow: 0 0 0 2px #3b82f6;
    }
`;

const Button = styled.button`
    padding: 0.5rem 1rem;
    background: #2563eb;
    color: #fff;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
    font-weight: 500;
    &:hover {
        background: #1d4ed8;
    }
    &:focus {
        box-shadow: 0 0 0 2px #3b82f6;
        outline: none;
    }
`;

const OutputArea = styled.div`
    background: #2d3748;
    padding: 0.75rem;
    border-radius: 0.375rem;
    height: 12rem;
    overflow-y: auto;
    font-size: 0.95rem;
    border: 1px solid #4a5568;
`;

const OutputError = styled.span`
    color: #f87171;
`;

const OutputSuccess = styled.span`
    color: #4ade80;
`;

const OutputPrompt = styled.span`
    color: #fde047;
`;

const OutputEmpty = styled.p`
    color: #a0aec0;
`;

const OutputNote = styled.p`
    font-size: 0.8rem;
    color: #a0aec0;
    margin-top: 0.5rem;
`;
function DOMExplorerJS() {
    const [jsInput, setJsInput] = useState('');
    const [jsOutput, setJsOutput] = useState([]);
    const outputRef = useRef(null);

    const handleJsSubmit = (e) => {
        e.preventDefault();
        if (!jsInput.trim()) return;

        let outputMessage = '';
        let resultValue = '';

        try {
            const commandToExecute = `(function() { return ${jsInput}; })();`;
            const result = eval(commandToExecute);
            resultValue = String(result);
            outputMessage = `> ${jsInput}\n< ${resultValue}`;
        } catch (error) {
            outputMessage = `> ${jsInput}\nError: ${error.message}`;
            console.error("Terminal JS Error:", error);
        }

        setJsOutput(prevOutput => [...prevOutput, outputMessage]);
        setJsInput('');
    };

    useEffect(() => {
        if (outputRef.current) {
            outputRef.current.scrollTop = outputRef.current.scrollHeight;
        }
    }, [jsOutput]);

    return (
        <TerminalContainer>
            <Label htmlFor="js-command-input">JavaScript DOM Commander:</Label>
            <Form onSubmit={handleJsSubmit}>
                <Input
                    id="js-command-input"
                    rows={4}
                    type="text"
                    value={jsInput}
                    onChange={(e) => setJsInput(e.target.value)}
                    placeholder="e.g., document.body.innerHTML = '<h1>Hello</h1>'"
                />
                <Button type="submit">Run JS</Button>
            </Form>
            <OutputArea ref={outputRef}>
                {jsOutput.length === 0 && (
                    <OutputEmpty>Output will appear here...</OutputEmpty>
                )}
                {jsOutput.map((line, index) => {
                    const [prompt, result] = line.split('\n');
                    if (line.includes('Error:')) {
                        return (
                            <pre key={index} className="whitespace-pre-wrap mb-1 last:mb-0">
                                <OutputPrompt>{prompt}</OutputPrompt>
                                <br />
                                <OutputError>{result}</OutputError>
                            </pre>
                        );
                    }
                    return (
                        <pre key={index} className="whitespace-pre-wrap mb-1 last:mb-0">
                            <OutputPrompt>{prompt}</OutputPrompt>
                            <br />
                            <OutputSuccess>{result}</OutputSuccess>
                        </pre>
                    );
                })}
            </OutputArea>
            <OutputNote>
                **Executes JavaScript against this iframe's DOM. Be careful, you can break the page!
            </OutputNote>
        </TerminalContainer>
    );
}

export default DOMExplorerJS;