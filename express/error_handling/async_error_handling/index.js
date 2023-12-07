const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Product = require('./models/product');
const AppError = require('./AppError');
const port = 3000;
const categories = ['fruit','vegetable','bakery','grocery'];

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

mongoose.connect('mongodb://127.0.0.1:27017/CRUD_demo')
    .then(() => {
        console.log('DB Connection Open!!!');
    })
    .catch(err => console.error('DB Connection Error!!!', err));

app.listen(port, () => {
    console.log('Listening on port 3000');
});

//catch the erros or return the function
function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(error => next(error));
    }
}

app.get('/', (req, res) => {
    res.redirect('/products');
});

app.get('/products', wrapAsync(async(req, res, next) => {
    const selectedFilter = req.query.filter || 'All Products';
    let products;
    if(selectedFilter === 'All Products'){
        products = await Product.find();
    }else{
        products = await Product.find({category: selectedFilter});
    }
    res.render('products/index', {products, selectedFilter, categories, currentPage: 'Products'});
}));

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories, currentPage: 'New Product' });
});

app.get('/products/:id/edit', wrapAsync(async(req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if(!product){
        return next(new AppError('Product not Found', 404));
    }
    res.render('products/edit', { product, categories, currentPage: 'Edit Product'});
}));

app.put('/products/:id', wrapAsync(async(req, res, next) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new:true });
    if(!product){
        return next(new AppError('Product not Found', 404));
    }
    res.redirect(`/products/${product.id}`);
}));

app.delete('/products/:id', wrapAsync(async(req, res, next) =>{
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
}));

app.get('/products/:id', wrapAsync(async(req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if(!product){
        return next(new AppError('Product not Found', 404));
    }
    res.render('products/view', { product, currentPage: product.name});
}));

app.post('/products', wrapAsync(async(req, res, next) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct.id}`);
}));

//custom error handler
app.use((err, req, res, next) => {
    let { status, message } = err;
    if(!status){
        status = 500;
    }
    res.status(status).send(message);
});





