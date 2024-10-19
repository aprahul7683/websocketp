const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const apiRoutes = require('./api/routes');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Middleware to parse JSON
app.use(express.json());

// Use the API routes
app.use('/api', apiRoutes);

// Handle WebSocket connections
wss.on('connection', (ws) => {
    console.log('New WebSocket client connected');
    ws.on('message', (message) => {
        console.log('Received:', message);
    });
    ws.on('close', () => {
        console.log('WebSocket client disconnected');
    });
});

// Start the server
const PORT = process.env.PORT || 6000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});