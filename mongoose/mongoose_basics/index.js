const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/movie_db')
    .then(() => {
        console.log('Connection Open!!!');
    })
    .catch(err => {
        console.log('Connection Error!!!', err);
    });

// create the schema for movie
const movie_schema = new mongoose.Schema({
    title: String,
    year: Number,
    rating: Number
});

//create the collection 'Movies' and Movie class
const Movie = mongoose.model('Movie', movie_schema);

//create instance from Movie
const amadeus = new Movie({title: 'Amadeus', year: 1989, rating: 9.2});
