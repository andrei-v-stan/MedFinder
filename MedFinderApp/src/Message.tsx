import { useState, useEffect } from 'react';

export function HelloMessage() {
    const name = "ASV";
    if (name) {
        return <h1>Hello {name}</h1>;
    }
    return <h1>Hello User</h1>;
}

export function ListNames() {
    const [names, setNames] = useState(["ASV", "Richard", "Alex", "Andrei", "Ion"]);

    useEffect(() => {
        const interval = setInterval(() => {
            const shuffledNames = [...names].sort(() => Math.random() - 0.5);
            setNames(shuffledNames);
        }, 30000);

        return () => clearInterval(interval);
    }, [names]);

    const namesList = names.map((name, index) => <li key={index}>{name}</li>);

    return (
        <ul>
            {namesList}
        </ul>
    );
}