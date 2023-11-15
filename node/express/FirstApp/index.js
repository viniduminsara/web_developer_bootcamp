const express = require('express');
const app = express();
const port = 8080;

// console.dir(app);
app.listen(port, () => {
    console.log('Listening to port 8080');
});

//get request
app.get('/home',(req, res) => {
    res.send('<h1>Home response</h1>');
});

app.get('/cats', (req,res) => {
    res.send("<h1>Cat response</h1>");
});

app.get('/dogs', (req,res) => {
    res.send("<h1>Dogs response</h1>");
});

app.get('/r/:subtopic', (req,res) => {
    const {subtopic} = req.params;
    res.send(`<h1>Browsing the ${subtopic}`);
});

app.get('/r/:subtopic/:post', (req,res) => {
    const {subtopic, post} = req.params;
    res.send(`<h1>Viewing the ${post} of ${subtopic}`);
});

app.get('*',(req, res) => {
    res.send('<h1>404 Not Found!!!</h1>');
});

//post request
app.post('/home',(req, res) => {
    res.send('<h1>Home POST response</h1>');
});