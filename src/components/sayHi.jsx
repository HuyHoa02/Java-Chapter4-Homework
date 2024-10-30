import React, { useEffect, useState } from 'react'

const SayHi = () => {
    const greetings = ["Hello", "Ciao", "Hola", "Xin chao"]
    const [index, setIndex] = useState(0);

    useEffect(() => {
        document.title = greetings[index]
    })

    function updateGreeting() {
        setIndex(Math.floor(Math.random() * greetings.length));
    }
    return (
        <button onClick={updateGreeting}>Say Hi</button>
    )
}

export default SayHi
