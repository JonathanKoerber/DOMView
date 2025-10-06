import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

// Tailwind CSS classes for basic styling
const terminalBg = 'bg-gray-900';
const terminalText = 'text-gray-100';
const inputBg = 'bg-gray-800';
const inputBorder = 'border-gray-700';
const focusRing = 'focus:ring-blue-500';
const buttonBg = 'bg-blue-600 hover:bg-blue-700';
const outputError = 'text-red-400';
const outputSuccess = 'text-green-400';
const outputPrompt = 'text-yellow-400';

function DOMExplorerTerminal() {
    const [cssInput, setCssInput] = useState('');
    const [jsInput, setJsInput] = useState('');
    const [jsOutput, setJsOutput] = useState([]);
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

    // --- JavaScript DOM Commander ---
    const handleJsSubmit = (e) => {
        e.preventDefault(); // Prevent form default submission
        if (!jsInput.trim()) return;

        let outputMessage = '';
        let resultValue = '';
        
        try {
            // *** IMPORTANT: This eval() executes against THIS iframe's DOM ***
            // This is generally safe because it only affects the content within the iframe.
            // But be mindful of what code you allow, as it can still break your iframe's UI.
            const commandToExecute = `(function() { return ${jsInput}; })();`; // Wrap to ensure return value
            const result = eval(commandToExecute);
            resultValue = String(result);
            outputMessage = `> ${jsInput}\n< ${resultValue}`;
        } catch (error) {
            outputMessage = `> ${jsInput}\nError: ${error.message}`;
            console.error("Terminal JS Error:", error);
        }

        setJsOutput(prevOutput => [...prevOutput, outputMessage]);
        setJsInput(''); // Clear input after submission
    };

    // Auto-scroll output to bottom
    useEffect(() => {
        if (outputRef.current) {
            outputRef.current.scrollTop = outputRef.current.scrollHeight;
        }
    }, [jsOutput]);

    return (
        <div className={`p-4 ${terminalBg} ${terminalText} font-mono rounded-lg shadow-xl w-full max-w-2xl`}>
            <h2 className="text-xl font-bold mb-4 text-purple-400"> Live CSS</h2>
            {/* CSS Live Editor */}
            <div className="mb-10">
                <textarea
                    id="css-input"
                    rows={4}
                    className={`w-full h-24 p-2 ${inputBg} ${inputBorder} rounded-md focus:outline-none focus:ring-2 ${focusRing} text-gray-200 resize-y`}
                    value={cssInput}
                    onChange={handleCssChange}
                    placeholder="e.g., body { background-color: #2a2a2a; color: #eee; }"
                ></textarea>
            </div>

            {/* JavaScript DOM Commander */}
            <div>
                <label htmlFor="js-command-input" className="block text-sm font-semibold mb-2 text-orange-300">JavaScript DOM Commander:</label>
                <form onSubmit={handleJsSubmit} className="flex gap-2 mb-4">
                    <input
                        id="js-command-input"
                        rows={6}
                        type="text"
                        className={`flex-grow p-2 ${inputBg} ${inputBorder} rounded-md focus:outline-none focus:ring-2 ${focusRing} text-gray-200`}
                        value={jsInput}
                        onChange={(e) => setJsInput(e.target.value)}
                        placeholder="e.g., document.body.innerHTML = '<h1>Hello</h1>'"
                    />
                    <button type="submit" className={`px-4 py-2 ${buttonBg} text-white rounded-md focus:outline-none focus:ring-2 ${focusRing}`}>
                        Run JS
                    </button>
                </form>

                <div ref={outputRef} className={`output-area ${inputBg} p-3 rounded-md h-48 overflow-y-auto text-sm border ${inputBorder}`}>
                    {jsOutput.length === 0 && <p className="text-gray-500">Output will appear here...</p>}
                    {jsOutput.map((line, index) => (
                        <pre key={index} className="whitespace-pre-wrap mb-1 last:mb-0">
                            {line.startsWith('Error:') ? (
                                <span className={outputError}>{line}</span>
                            ) : (
                                <>
                                    <span className={outputPrompt}>{line.split('\n')[0]}</span>
                                    <br />
                                    <span className={outputSuccess}>{line.split('\n')[1]}</span>
                                </>
                            )}
                        </pre>
                    ))}
                </div>
                <p className="text-xs text-gray-400 mt-1">
                    **Executes JavaScript against this iframe's DOM. Be careful, you can break the page!
                </p>
            </div>
        </div>
    );
}

export default DOMExplorerTerminal;