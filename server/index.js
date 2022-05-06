const express = require('express');
const path = require('path');

const app = express();

const buildDir = path.join(__dirname, 'public');

const subDir = '/';

app.use(subDir, express.static(buildDir));
app.get('*', (req, res) => {
    res.sendFile(path.join(buildDir, 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port);
