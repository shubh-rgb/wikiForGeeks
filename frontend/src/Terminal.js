import React, { useEffect, useState } from 'react';

function Terminal() {
    const [output, setOutput] = useState('');

    useEffect(() => {
        fetch('http://backend-service:5000/terminal')
            .then((response) => response.json())
            .then((data) => setOutput(data.terminalOutput));
    }, []);

    return (
        <div>
            <h2>Terminal</h2>
            <pre>{output}</pre>
        </div>
    );
}

export default Terminal;
