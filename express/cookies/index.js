const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.listen(port, (req, res) => {
    console.log('Server up on port 3000');
});

app.use(cookieParser());

app.get('/setname', (req, res) => {
    res.cookie('name', 'Vinidu Minsara');
    res.send('cookie send'); 
});

app.get('/greet', (req, res) => {
    const {name = 'Anonymous'} = req.cookies;
    res.send(`Hello There, ${name}`);
});