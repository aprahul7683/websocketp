const WebSocket = require('ws');

let ws;

// Function to connect to the Coinbase Pro WebSocket API
function connectToCoinbaseWebSocket() {
    ws = new WebSocket('wss://ws-feed.pro.coinbase.com');

    ws.on('open', () => {
        console.log('Connected to Coinbase Pro WebSocket');
    });

    ws.on('message', (data) => {
        const message = JSON.parse(data);
        console.log('Message from Coinbase Pro:', message);
        // Handle the incoming WebSocket messages
    });

    ws.on('error', (err) => {
        console.error('WebSocket error:', err);
    });

    ws.on('close', () => {
        console.log('WebSocket connection closed. Reconnecting...');
        setTimeout(connectToCoinbaseWebSocket, 1000);
    });
}

// Function to subscribe to a product and channels
function subscribe(productId) {
    if (ws && ws.readyState === WebSocket.OPEN) {
        const subscribeMessage = {
            type: 'subscribe',
            product_ids: [productId],
            channels: ['level2', 'matches']
        };
        ws.send(JSON.stringify(subscribeMessage));
        console.log(`Subscribed to ${productId}`);
    }
}

// Function to unsubscribe from a product and channels
function unsubscribe(productId) {
    if (ws && ws.readyState === WebSocket.OPEN) {
        const unsubscribeMessage = {
            type: 'unsubscribe',
            product_ids: [productId],
            channels: ['level2', 'matches']
        };
        ws.send(JSON.stringify(unsubscribeMessage));
        console.log(`Unsubscribed from ${productId}`);
    }
}

// Initialize the WebSocket connection
connectToCoinbaseWebSocket();

module.exports = {
    subscribe,
    unsubscribe,
};