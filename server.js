const express = require('express');
const app = express();

// routes
app.get('/', (req, res) => {
    res.send('Hello node API')
})

app.get('/fresh', (req, res) => {
    res.send('Hello node API - with fresh')
})

app.listen(3000, () => {
    console.log('Node API app is running on port 3000');
})