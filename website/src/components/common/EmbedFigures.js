import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie-player';
import loadingAnimation from '../../assets/loading.json';

function EmbedFigure({ route }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const iframe = document.getElementsByClassName('figure')[0];
        iframe.onload = () => setIsLoading(false);
    }, []);

    return (
        
        <div className="relative w-full h-full">
            
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
                className="figure overflow-visible w-full h-full m-auto p-0 border-none"
                src={`http://127.0.0.1:8050${route}`}
                title="Figure"
            />
            
        </div>
    );
}

export default EmbedFigure;