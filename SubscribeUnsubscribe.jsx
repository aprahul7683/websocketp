import React, { useState } from 'react';

const SubscribeUnsubscribe = ({ products, onSubscribe, onUnsubscribe }) => {
    const [subscriptions, setSubscriptions] = useState({});

    const toggleSubscription = (product) => {
        if (subscriptions[product]) {
            onUnsubscribe(product);
        } else {
            onSubscribe(product);
        }
        setSubscriptions({ ...subscriptions, [product]: !subscriptions[product] });
    };

    return (
        <div>
            <h3>Subscribe/Unsubscribe</h3>
            {products.map((product) => (
                <button
                    key={product}
                    onClick={() => toggleSubscription(product)}
                >
                    {subscriptions[product] ? `Unsubscribe from ${product}` : `Subscribe to ${product}`}
                </button>
            ))}
        </div>
    );
};

export default SubscribeUnsubscribe;