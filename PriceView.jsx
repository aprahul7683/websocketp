import React, { useEffect, useState } from 'react';

const PriceView = ({ priceUpdates }) => {
    const [prices, setPrices] = useState({});

    useEffect(() => {
        if (priceUpdates) {
            setPrices(priceUpdates);
        }
    }, [priceUpdates]);

    return (
        <div>
            <h3>Price View</h3>
            {Object.entries(prices).map(([product, data]) => (
                <div key={product}>
                    <h4>{product}</h4>
                    <p>Bids: {data.bids.join(', ')}</p>
                    <p>Asks: {data.asks.join(', ')}</p>
                </div>
            ))}
        </div>
    );
};

export default PriceView;