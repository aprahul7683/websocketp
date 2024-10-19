import React from 'react';

const SystemStatus = ({ subscribedChannels }) => {
    return (
        <div>
            <h3>System Status</h3>
            <ul>
                {subscribedChannels.map((channel, index) => (
                    <li key={index}>{channel}</li>
                ))}
            </ul>
        </div>
    );
};

export default SystemStatus;