const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('View all the dogs');
});

router.post('/', (req, res) => {
    res.send('Create new dog');
});

router.get('/new', (req, res) => {
    res.send('View form to create new dog');
});

router.get('/:id', (req, res) => {
    res.send('View specific dog');
});

router.put('/:id', (req, res) => {
    res.send('Edit the dog');
});

router.delete('/:id', (req, res) => {
    res.send('Delete the dog');
});

router.get('/:id/edit', (req, res) => {
    res.send('View form to edit dog');
});

module.exports = router;