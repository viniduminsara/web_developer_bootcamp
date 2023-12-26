const express = require('express');
const User = require('./models/user');
const mongoose = require('mongoose');
const path = require('path');
const bcrypt = require('bcrypt');
const session = require('express-session');
const port = 3000;

const app = express();
app.use(express.urlencoded({ extended:true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const sessionOption = {
    secret: 'this is a secret',
    resave: false,
    saveUninitialized: false
}

app.use(session(sessionOption));

mongoose.connect('mongodb://127.0.0.1:27017/auth_demo')
    .then(() => console.log('DB Connection Open!!!'))
    .catch(err => console.error('DB Connection Error!!!', err));

app.listen(port, () => {
    console.log('Server up on port 3000');
});

const requireLogin = (req, res, next) => {
    if(!req.session.user_id){
        return res.redirect('/login');
    }
    next();
}

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.post('/signup', async(req, res) => {
    const { password, username } = req.body;
    const user = new User({ username, password });
    await user.save();
    req.session.user_id = user.id;
    res.redirect('/home');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async(req, res) => {
    const { username, password } = req.body;
    const foundUser = await User.findAndValidate(username, password);
    if(foundUser){
        req.session.user_id = foundUser.id;
        res.redirect('/home');
    }else{
        res.send('Incorrect password');
    }
});

app.get('/home', requireLogin, async(req, res) => {
    const user = await User.findById(req.session.user_id);
    res.render('home', { user });
});

app.get('/secret', requireLogin, (req, res) => {
    res.send('This is the secret');
});

app.post('/signout', (req, res) => {
    // req.session.user_id = null;
    req.session.destroy();
    res.redirect('/home');
});