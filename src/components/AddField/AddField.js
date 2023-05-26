import React, { useState } from 'react';

const AddField = () => {
    const [homeTeamName, setHomeTeamName] = useState('');
    const [awayTeamName, setAwayTeamName] = useState('');

    return (
       <div id='addField'>
           <input
               type="text"
               id="homeTeam"
               placeholder="Home Team Name"
               value={homeTeamName}
               onChange={event => setHomeTeamName(event.target.value)}/>
           <input
               type="text"
               id="awayTeam"
               placeholder="Away Team Name"
               value={awayTeamName}
               onChange={event => setAwayTeamName(event.target.value)}
           />
           <button>
               Add new Match
           </button>
       </div>
    );
};

export default AddField;