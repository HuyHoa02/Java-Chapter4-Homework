import React, { useEffect, useState } from 'react';

const UserStorage = () => {
    // const [user, setUser] = useState("Sanjiv");

    // useEffect(() => {
    //     const storedUser = window.localStorage.getItem("user");
    //     console.log(storedUser)
    //     if (storedUser) {
    //         setUser(storedUser);
    //     }
    // }, []);

    const [user, setUser] = useState(() => {
        // Check local storage on initial render
        const storedUser = localStorage.getItem('user');
        return storedUser || "Sanjiv"; // Fallback to "Sanjiv" if nothing is stored
    });

    useEffect(() => {
        window.localStorage.setItem("user", user);
    }, [user]);

    return (
        <select value={user} onChange={e => setUser(e.target.value)}>
            <option value="Jason">Jason</option>
            <option value="Akiko">Akiko</option>
            <option value="Clarisse">Clarisse</option>
            <option value="Sanjiv">Sanjiv</option>
        </select>
    );
}

export default UserStorage;
