const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://127.0.0.1:27017/games_db')
    .then(() => {
        console.log('DB Connection Open!!!');
    })
    .catch(err => console.error('DB Connection Error!!!', err));

app.listen(port, () => {
    console.log('Listening on port 3000');
});

app.get('/home', (req, res) => {
    res.send('home');
});


