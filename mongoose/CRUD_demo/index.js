const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./models/product');
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://127.0.0.1:27017/CRUD_demo')
    .then(() => {
        console.log('DB Connection Open!!!');
    })
    .catch(err => console.error('DB Connection Error!!!', err));

app.listen(port, () => {
    console.log('Listening on port 3000');
});

app.get('/home', (req, res) => {
    res.render('home/index', { currentPage: 'Home' });
});

app.get('/products', async (req, res) => {
    const products = await Product.find();
    res.render('products/index', {products, currentPage: 'Products'});
});



