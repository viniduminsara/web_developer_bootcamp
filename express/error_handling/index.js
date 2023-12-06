const express = require('express');
const app = express();
const morgan = require('morgan');
const AppError = require('./AppError');

app.use(morgan('common'));

app.listen(3000, () => {
    console.log('Listening to port 3000');
});

const verifyPassword = (req, res, next) => {
    const {password} = req.query;
    if(password === '12345'){
        return next();
    }
    //use builtin error handler
    // throw new Error('Password incorrect');

    //use custom error handling class
    throw new AppError('Password required', 401);
    
}

app.get('/secret', verifyPassword, (req, res) => {
    res.send('My name is Vinidu Minsara.');
});

app.get('/error', (req, res) => {
    chicken.fly();
});

//custom error handler
// app.use((err, req, res, next) => {
//     console.log('*******************************************');
//     console.log('*******************ERROR*******************');
//     console.log('*******************************************');
//     res.status(500).send('Error');

//     //if want call express built-in error handlers
//     next(err);
// });

app.use((err, req, res, next) => {
    const {status = 500, message = 'Something went wrong'} = err;
    res.status(status).send(message);
});