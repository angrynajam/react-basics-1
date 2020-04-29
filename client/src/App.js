import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello my name is Najam</p>
                <a
                    className="App-link"
                    href="https://facebook.com/angrynajam"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    facebook
                </a>
            </header>
        </div>
    );
}

export default App;
