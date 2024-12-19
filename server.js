require('dotenv').config();
const express = require('express');
const generateAgoraTokens = require('./apk/generateAgoraTokens');

const app = express();
const PORT = process.env.PORT || 3000;

console.log('Starting server...'); // Debugging line

app.get('/', (req, res) => {
    res.send('Agora Token Generator is running');
});

app.get('/generate-token', generateAgoraTokens);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
