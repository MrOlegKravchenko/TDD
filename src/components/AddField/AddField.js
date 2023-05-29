import React, { useState } from 'react';

const AddField = ({ currentMatches, setCurrentMatches }) => {
    const [homeTeamName, setHomeTeamName] = useState('');
    const [awayTeamName, setAwayTeamName] = useState('');

    return (
       <div id='addField'>
           <input
               type='text'
               id='homeTeam'
               placeholder='Home Team Name'
               value={homeTeamName}
               onChange={event => setHomeTeamName(event.target.value)}/>
           &nbsp;
           :
           &nbsp;
           <input
               type='text'
               id='awayTeam'
               placeholder='Away Team Name'
               value={awayTeamName}
               onChange={event => setAwayTeamName(event.target.value)}
           />
           <button onClick={() => {
               console.log('currentMatches', currentMatches);
               setCurrentMatches(prevState => [...prevState, {
                   id: homeTeamName+awayTeamName,
                   homeTeam: homeTeamName,
                   homeTeamScore: 0,
                   awayTeam: awayTeamName,
                   awayTeamScore: 0
               }])
           }}>
               Add new Match
           </button>
       </div>
    );
};

export default AddField;