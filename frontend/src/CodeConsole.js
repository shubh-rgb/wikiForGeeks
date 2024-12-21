import React, { useState } from 'react';

function CodeConsole() {
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');

    const executeCode = () => {
        fetch('http://backend-service:5000/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code }),
        })
            .then((response) => response.json())
            .then((data) => setOutput(data.output));
    };

    return (
        <div>
            <h2>Code Console</h2>
            <textarea
                rows="5"
                cols="40"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Write your code here..."
            />
            <br />
            <button onClick={executeCode}>Run</button>
            <pre>{output}</pre>
        </div>
    );
}

export default CodeConsole;
