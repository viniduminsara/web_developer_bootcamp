const express = require('express');
const app = express();
const path = require('path');
const data = require('./data.json');
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log('Listen to port 3000');
});

app.get('/', (req,res) => {
    const name = 'Home';
    res.render('homepage.ejs', {name});
});

app.get('/about', (req,res) => {
    const name = 'About';
    res.render('about_page.ejs', {name});
});

app.get('/contact', (req,res) => {
    const name = 'Contact';
    res.render('contact_page.ejs', {name});
});

app.get('/:subpage', (req,res) => {
    const {subpage} = req.params;
    const result = data[subpage];
    if(result){
        res.render('subpage', {...result});
    }else{
        const name = 'Not Found';
        res.render('notfound_page', {name});
    }
});