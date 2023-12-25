const express = require('express');
const User = require('./models/user');
const mongoose = require('mongoose');
const path = require('path');
const bcrypt = require('bcrypt')
const port = 3000;

const app = express();
app.use(express.urlencoded({ extended:true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

mongoose.connect('mongodb://127.0.0.1:27017/auth_demo')
    .then(() => console.log('DB Connection Open!!!'))
    .catch(err => console.error('DB Connection Error!!!', err));

app.listen(port, () => {
    console.log('Server up on port 3000');
});

app.get('/home', (req, res) => {
    res.send('This is the home page');
})

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.post('/signup', async(req, res) => {
    const { password, username } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        username: username,
        password: hash
    })
    await user.save();
    res.redirect('/home');
})