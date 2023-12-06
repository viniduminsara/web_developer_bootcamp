const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('common'));

app.listen(3000, () => {
    console.log('Listening to port 3000');
});

const verifyPassword = (req, res, next) => {
    const {password} = req.query;
    if(password === '12345'){
        return next();
    }
    res.send('Password incorrect');
}


app.get('/secret', verifyPassword, (req, res) => {
    res.send('My name is Vinidu Minsara.');
});

app.get('/dogs', (req, res) => {
    res.send(`Requst Date : ${req.requestTime}`);
});

app.use((req, res, next) => {
    res.status(404).send('Not Found!');
});