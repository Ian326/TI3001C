import React from 'react';

function EmbedFigure({ route }) {
    return (
        <div className="w-full h-full">
            <iframe
                allowtransparency="true"
                className="figure overflow-visible w-full h-full m-auto p-0 border-none"
                src={`http://127.0.0.1:8050${route}`}
                title="Figure"
                style={{ backgroundColor: 'transparent' }}
            />
        </div>
    );
}

export default EmbedFigure;