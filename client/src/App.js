import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const monstersData = [
        {
            name: 'Frankenstine',
        },
        {
            name: 'Dracula',
        },
        {
            name: 'Zombie',
        },
    ];

    const [monsters, setMonsters] = useState(monstersData);

    return (
        <div className="App">
            {monsters.map((monster) => (
                <h1> {monster.name} </h1>
            ))}
        </div>
    );
}

export default App;
