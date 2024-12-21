const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/articles', (req, res) => {
    res.json([{ title: "Intro to Programming", content: "Learn the basics of programming!" }]);
});

app.post('/execute', (req, res) => {
    const { code } = req.body;
    // Simple Python code execution simulation
    if (code === 'print("Hello World")') {
        res.json({ output: "Hello World\n" });
    } else {
        res.json({ output: "Error: Invalid Code" });
    }
});

app.get('/terminal', (req, res) => {
    res.json({ terminalOutput: "Simulated Terminal Output" });
});

app.listen(5000, () => console.log('Backend running on port 5000'));
