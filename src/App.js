import React, { useState } from 'react';
import './App.css';
import AddField from './components/AddField/AddField';
import CurrentMatches from './components/CurrentMatches/CurrentMatches';
import MatchesSummary from './components/MatchesSummary/MatchesSummary';

function App() {
    const [currentMatches, setCurrentMatches] = useState({});
    const [matchesSummary, setMatchesSummary] = useState({});

    return (
        <div
            className='App'
            style={{
                margin: '10vh auto',
                padding: '3vh',
                width: '60vw',
                borderRadius: '20px',
                boxShadow: '15px 10px 10px 15px lightgray',
            }}
        >
            <header>
                <h2>
                    Live Football World Cup Scoreboard
                </h2>
            </header>
            <main>
                <AddField currentMatches={currentMatches} setCurrentMatches={setCurrentMatches} />
                {Object.keys(currentMatches).length !== 0
                    && <CurrentMatches
                        currentMatches={currentMatches}
                        setCurrentMatches={setCurrentMatches}
                        setMatchesSummary={setMatchesSummary} />}
                {Object.keys(matchesSummary).length !== 0
                    && <MatchesSummary matchesSummary={matchesSummary} />}
            </main>
        </div>
    );
}

export default App;
