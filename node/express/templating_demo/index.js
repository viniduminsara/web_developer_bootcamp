const express = require('express');
const app = express();
const path = require('path');
const data = require('./data.json')
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log('Listening to port 3000');
});

app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random.ejs', {random: num});
});

app.get('/:subtopic', (req,res) => {
    const {subtopic} = req.params;
    const result = data[subtopic];
    if(result){
        res.render('subtopic.ejs', { ...result});
    }else{
        res.render('notfound.ejs', {subtopic});
    }
});

app.get('/colour', (req,res) => {
    const colors = ['red','green','blue','white'];
    res.render('colour.ejs', {colors});
});

app.get('/search/:subtopic/:post', (req, res) => {
    const {subtopic, post} = req.params;
    res.render('search.ejs', {subtopic, post});
});




