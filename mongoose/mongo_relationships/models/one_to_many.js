const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationshipDemo')
    .then(() => console.log('Database connected :)'))
    .catch(err => console.log('Database connection error :('));

const productSchema = new mongoose.Schema({
    name: String,
    price: Number
});

const farmSchema = mongoose.Schema({
    name: String,
    city: String,
    products: [{ type: mongoose.Schema.ObjectId, ref: 'Product'}]
});

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

const saveProducts = async() => {
    await Product.insertMany([
        { name: 'Eggs', price: 40 },
        { name: 'Chicken', price: 1300 },
        { name: 'Rice', price: 220 }
    ]);
}

const saveFarm = async() => {
    const farm = new Farm({name: 'Kalutara Farm', city: 'Kalutara'});
    const savedProducts = await Product.find();
    farm.products = savedProducts;
    await farm.save();
}

saveProducts()
    .then(() => {
        // Products have been saved, now retrieve and log them
        return Product.find();
    })
    .then((products) => {
        console.log(products);

        // Save farms and log them after completion
        return saveFarm();
    })
    .then(() => {
        // Farms have been saved, now retrieve and log them
        return Farm.find().populate('products'); // <- populate data of products of each farm
    })
    .then((farms) => {
        console.log(farms);

        // Close the mongoose connection after everything is done
        mongoose.connection.close();
    })
    .catch((err) => console.log(err));
