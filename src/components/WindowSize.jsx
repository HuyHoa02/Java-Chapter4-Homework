import React, { useEffect, useState } from 'react'

const WindowSize = () => {
    const [size, setSize] = useState(getSize())

    function getSize() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }

    useEffect(() => {
        function hanldeResize() {
            setSize(getSize)
        }

        window.addEventListener('resize', hanldeResize)

        return () => window.removeEventListener('resize', hanldeResize);
    }, [])

    return (
        <p>Width: {size.width}, Height: {size.height}</p>
    )
}

export default WindowSize
