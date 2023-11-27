const mongoose = require('mongoose');
const colors = require('colors');


mongoose.connect('mongodb://127.0.0.1:27017/games_db')
    .then(() => {
        console.log('Connection Open!!!');

        // create the schema for games
        const game_schema = new mongoose.Schema({
            name: String,
            year: Number,
            rating: Number
        });

        //create the collection 'FPS_game' and Movie class
        const FPS_game = mongoose.model('FPS_game', game_schema);

        //create instance from FPS_game
        const cod4 = new FPS_game({name: 'Call of Duty: Modern Warfare 2', year: 2009, rating: 9.5});

        //insert one game
        cod4.save()
            .then(res => {
                console.log('insertOne Completed'.rainbow, res);

                //insert many games
                FPS_game.insertMany([
                    {name: 'Call of Duty: Black OPS', year: 2010, rating: 9.0},
                    {name: 'Farcry 3', year: 2012, rating: 9.2},
                    {name: 'Counter Strike: Global Offensive', year: 2012, rating: 8.2},
                    {name: 'Counter Strike: 1.6v', year: 2003, rating: 7.4}
                ])
                    .then(res => {
                        console.log('insertMany Completed'.rainbow, res);

                        //update one game
                        FPS_game.updateOne({name: 'Farcry 3'}, {rating: 9.9})
                            .then(res => {
                                console.log('UpdateOne Completed'.rainbow, res);

                                //update many games
                                FPS_game.updateMany({name: {$in: ['Counter Strike: Global Offensive', 'Call of Duty: Black OPS']}}, {rating: 8.5})
                                    .then(res => {
                                        console.log('UpdateMany Completed'.rainbow, res);

                                        //delete one game
                                        FPS_game.deleteOne({name: 'Call of Duty: Black OPS'})
                                            .then(res => {
                                                console.log('DeleteOne Completed'.rainbow, res);

                                                //delete many games
                                                FPS_game.deleteMany({year: {$lt: 2010}})
                                                    .then(res => {
                                                        console.log('DeleteMany Completed'.rainbow, res);

                                                        //closing the connection
                                                        mongoose.connection.close()
                                                            .then(() => {
                                                                console.log('Connection Closed!!!'.rainbow);
                                                            })
                                                            .catch(err => console.error('Error closing connection:', err));
                                                    })
                                                    .catch(err => console.error(err));
                                            })
                                            .catch(err => console.error(err));
                                    })
                                    .catch(err => console.error(err));
                            })
                            .catch(err => console.error(err));
                    })
                    .catch(err => console.error(err));
            })
            .catch(err => console.error(err));
    })
    .catch(err => console.error('Connection Error!!!', err));


