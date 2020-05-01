import React, { useState } from 'react';
import './App.css';

function App() {
    const monstersData = [
        {
            name: 'Frankenstine',
            id: 1,
        },
        {
            name: 'Dracula',
            id: 2,
        },
        {
            name: 'Zombie',
            id: 3,
        },
    ];

    const [monsters, setMonsters] = useState(monstersData);

    return (
        <div className="App">
            {monsters.map((monster) => (
                <h1 key={monster.id}> {monster.name} </h1>
            ))}
        </div>
    );
}

export default App;
