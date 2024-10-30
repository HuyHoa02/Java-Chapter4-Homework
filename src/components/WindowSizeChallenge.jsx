import React, { useEffect, useState } from 'react'

const WindowSizeChallenge = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    function getWindowSize() {
        return window.innerWidth;
    }

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(getWindowSize());
        };

        window.addEventListener('resize', handleResize);

        updateDocumentTitle(windowSize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        updateDocumentTitle(windowSize);
    }, [windowSize]);

    const updateDocumentTitle = (size) => {
        if (size < 600) {
            document.title = "Small";
        } else if (size < 1200) {
            document.title = "Medium";
        } else {
            document.title = "Large";
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>Resize the window to change the title!</h1>
            <p>Current window size: {windowSize}px</p>
        </div>
    );
}

export default WindowSizeChallenge
