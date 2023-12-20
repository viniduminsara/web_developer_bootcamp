const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('View all the shelters');
});

router.post('/', (req, res) => {
    res.send('Create new shelter');
});

router.get('/new', (req, res) => {
    res.send('View form to create new shelter');
});

router.get('/:id', (req, res) => {
    res.send('View specific shelter');
});

router.put('/:id', (req, res) => {
    res.send('Edit the shelter');
});

router.delete('/:id', (req, res) => {
    res.send('Delete the shelter');
});

router.get('/:id/edit', (req, res) => {
    res.send('View form to edit shelter');
});

module.exports = router;