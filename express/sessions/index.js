const express = require('express');
const session = require('express-session');

const app = express();
const port = 3000;
const sessionOption = {
    secret: 'this is not a secret',
    resave: false,
    saveUninitialized: false
}

app.use(session(sessionOption));

app.listen(port, () => {
    console.log('Server up on port 3000');
});

app.get('/viewcount', (req, res) => {
    (req.session.count) ? req.session.count += 1 : req.session.count = 1;
    res.send(`You viewed this page ${req.session.count} times.`);
});

app.get('/register', (req, res) => {
    const { username = 'Unknown'} = req.query;
    req.session.username = username;
    res.redirect('/greet');
});

app.get('/greet', (req, res) => {
    const { username } = req.session;
    res.send(`Welcome back, ${username}`);
})