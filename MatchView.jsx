import React from 'react';

const MatchView = ({ matches }) => {
    return (
        <div>
            <h3>Match View</h3>
            {matches.map((match, index) => (
                <div key={index}>
                    <span style={{ color: match.side === 'buy' ? 'green' : 'red' }}>
                        {match.size} @ {match.price} - {match.product_id} ({match.time})
                    </span>
                </div>
            ))}
        </div>
    );
};

export default MatchView;
