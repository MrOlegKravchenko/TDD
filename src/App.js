import React, { useState } from 'react';
import './App.css';
import AddField from './components/AddField/AddField';
import CurrentMatches from './components/CurrentMatches/CurrentMatches';
// import MatchesSummary from './components/MatchesSummary/MatchesSummary';

function App() {
    const [currentMatches, setCurrentMatches] = useState(null);

    return (
        <div className='App'>
            <header>
                <h2>
                    Live Football World Cup Scoreboard
                </h2>
            </header>
            <main>
                <AddField currentMatches={currentMatches} setCurrentMatches={setCurrentMatches} />
                <CurrentMatches currentMatches={currentMatches} setCurrentMatches={setCurrentMatches} />
                {/*<MatchesSummary />*/}
            </main>
        </div>
    );
}

export default App;
