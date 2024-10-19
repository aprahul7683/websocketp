const express = require('express');
const { subscribe, unsubscribe } = require('./websocket');

const router = express.Router();

// API endpoint to subscribe to a product
router.post('/subscribe', (req, res) => {
    const { productId } = req.body;
    if (productId) {
        subscribe(productId);
        res.status(200).send(`Subscribed to ${productId}`);
    } else {
        res.status(400).send('Product ID is required');
    }
});

// API endpoint to unsubscribe from a product
router.post('/unsubscribe', (req, res) => {
    const { productId } = req.body;
    if (productId) {
        unsubscribe(productId);
        res.status(200).send(`Unsubscribed from ${productId}`);
    } else {
        res.status(400).send('Product ID is required');
    }
});

module.exports = router;