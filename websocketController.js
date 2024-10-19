const { subscribe, unsubscribe } = require('../api/websocket');

// Subscribe controller function
function handleSubscribe(req, res) {
    const { productId } = req.body;
    if (productId) {
        subscribe(productId);
        res.status(200).send(`Successfully subscribed to ${productId}`);
    } else {
        res.status(400).send('Product ID is required for subscription');
    }
}

// Unsubscribe controller function
function handleUnsubscribe(req, res) {
    const { productId } = req.body;
    if (productId) {
        unsubscribe(productId);
        res.status(200).send(`Successfully unsubscribed from ${productId}`);
    } else {
        res.status(400).send('Product ID is required for unsubscription');
    }
}

module.exports = {
    handleSubscribe,
    handleUnsubscribe,
};