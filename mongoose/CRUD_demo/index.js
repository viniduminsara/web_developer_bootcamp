const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const multer = require('multer');
const fs = require('fs');
const Product = require('./models/product');
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/CRUD_demo')
    .then(() => {
        console.log('DB Connection Open!!!');
    })
    .catch(err => console.error('DB Connection Error!!!', err));

app.listen(port, () => {
    console.log('Listening on port 3000');
});

// Configure multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

app.get('/home', (req, res) => {
    res.render('home/index', { currentPage: 'Home' });
});

app.get('/products', async(req, res) => {
    const products = await Product.find();
    res.render('products/index', {products, currentPage: 'Products'});
});

app.get('/products/new', (req, res) => {
    res.render('products/new', { currentPage: 'New Product' });
});

app.get('/products/:id/edit', async(req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, currentPage: 'Edit Product'});
})

app.get('/products/:id', async(req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/view', { product, currentPage: product.name});
});

app.post('/products', upload.single('image'), async(req, res) => {
    // Access the uploaded file information through req.file
    const { name, price, qty, category } = req.body;
    const imagePath = req.file ? req.file.path : null;

    // Read the image file as binary data
    let imageBuffer = undefined;
    if(imagePath){
        imageBuffer = fs.readFileSync(imagePath);
    }

    const newProduct = new Product({
        name: name,
        price: price,
        qty: qty,
        category: category,
        image: {
            data: imageBuffer,
            contentType: 'image/jpeg'
        }
    });

    await newProduct.save();
    res.redirect(`/products/${newProduct.id}`);
});



