import React, { useState, useEffect } from 'react';
import SubscribeUnsubscribe from './components/SubscribeUnsubscribe';
import PriceView from './components/PriceView';
import MatchView from './components/MatchView';
import SystemStatus from './components/SystemStatus';

const App = () => {
    const [ws, setWs] = useState(null);
    const [priceUpdates, setPriceUpdates] = useState({});
    const [matches, setMatches] = useState([]);
    const [subscribedChannels, setSubscribedChannels] = useState([]);

    useEffect(() => {
        const socket = new WebSocket(`ws://localhost:5000?userId=${Math.random()}`);
        setWs(socket);

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === 'priceUpdate') {
                setPriceUpdates(data.priceUpdates);
            } else if (data.type === 'match') {
                setMatches((prevMatches) => [...prevMatches, data.match]);
            } else if (data.type === 'subscriptionStatus') {
                setSubscribedChannels(data.channels);
            }
        };

        return () => socket.close();
    }, []);

    const handleSubscribe = (product) => {
        ws.send(JSON.stringify({ type: 'subscribe', product }));
    };

    const handleUnsubscribe = (product) => {
        ws.send(JSON.stringify({ type: 'unsubscribe', product }));
    };

    return (
        <div className="App">
            <SubscribeUnsubscribe
                products={['BTC-USD', 'ETH-USD', 'XRP-USD', 'LTC-USD']}
                onSubscribe={handleSubscribe}
                onUnsubscribe={handleUnsubscribe}
            />
            <PriceView priceUpdates={priceUpdates} />
            <MatchView matches={matches} />
            <SystemStatus subscribedChannels={subscribedChannels} />
        </div>
    );
};

export default App;
