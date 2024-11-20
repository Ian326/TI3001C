import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie-player';
import loadingAnimation from '../../assets/loading.json'; // Update with the path to your Lottie JSON file

function EmbedFigure({ route }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const iframe = document.getElementsByClassName('embed-iframe')[0];
        iframe.onload = () => setIsLoading(false);
    }, []);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {isLoading && (
                <div className="loading-animation">
                    <Lottie
                        loop
                        animationData={loadingAnimation}
                        play
                        style={{ width: 150, height: 150 }}
                    />
                </div>
            )}
            <iframe
                className="embed-iframe"
                src={`http://127.0.0.1:8050${route}`}
                style={{ 
                    width: '100%', 
                    height: '100%', 
                    border: 'none',
                    margin: '0 auto',
                    padding: '0',
                    overflow: 'visible'
                }}
            />
        </div>
    );
}

export default EmbedFigure;