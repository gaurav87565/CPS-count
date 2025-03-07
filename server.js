const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'Assets')));

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
