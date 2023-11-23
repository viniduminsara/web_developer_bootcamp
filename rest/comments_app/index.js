const express = require('express');
const app = express();
const methodOverride = require('method-override');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const port = 3000;

app.use(express.urlencoded( {extended: true} ));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

let comments = [
    {
        id: uuidv4(),
        username: 'viniduminsara',
        comment: 'hello everyone 😊'
    },
    {
        id: uuidv4(),
        username: 'mindevilz',
        comment: 'lol that is funny 🤣🤣🤣🤣'
    },
    {
        id: uuidv4(),
        username: 'vinidu2005',
        comment: 'we live, we love, we lie 🥶'
    },
    {
        id: uuidv4(),
        username: 'minsara2005',
        comment: 'so beautiful so elegent just looking like a wow😲😲😲'
    }
];

app.listen(port, () => {
    console.log('Listening to port 3000');
});

app.get('/comments', (req,res) => {
    res.render('comments/viewAll.ejs', {comments});
});

app.get('/comments/new', (req,res) => {
    res.render('comments/new.ejs');
});

app.post('/comments', (req,res) => {
    const {username, comment} = req.body;
    comments.push({ 
        id: uuidv4(),
        username: username,
        comment: comment
    });
    res.redirect('/comments');
});

app.get('/comments/:id', (req,res) => {
    const {id} = req.params;
    const comment = comments.find(comment => comment.id === id);
    res.render('comments/view.ejs', {comment});
});

app.get('/comments/:id/edit', (req,res) => {
    const {id} = req.params;
    const comment = comments.find(comment => comment.id === id);
    res.render('comments/edit.ejs', {comment});
});

app.patch('/comments/:id', (req,res) => {
    const {id} = req.params;
    const newCommentText = req.body.comment;
    const foundcomment = comments.find(comment => comment.id === id);
    foundcomment.comment = newCommentText;
    res.redirect('/comments');
});

app.delete('/comments/:id', (req,res) => {
    const {id} = req.params;
    comments = comments.filter(comment => comment.id !== id);
    res.redirect('/comments');
})