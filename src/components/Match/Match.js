import React, { useState } from 'react';


const Match = ({ id, currentMatches, setCurrentMatches }) => {
    const [homeTeamScore, setHomeTeamScore] = useState(0);
    const [awayTeamScore, setAwayTeamScore] = useState(0);

    return (
       <div id={`matchField_${id}`}>
           <div id='homeTeam'>
               <label htmlFor='points'>
                   {currentMatches[id].homeTeam}
               </label>
               <input
                   type='number'
                   id='homeTeamPoints'
                   name='points'
                   min='0'
                   step='1'
                   value={homeTeamScore}
                   onChange={event => setHomeTeamScore(event.target.value)}
               />
           </div>
           &nbsp;
           :
           &nbsp;
           <div id='awayTeam'>
               <input
                   type='number'
                   id='awayTeamPoints'
                   name='points'
                   min='0'
                   step='1'
                   value={awayTeamScore}
                   onChange={event => setAwayTeamScore(event.target.value)}
               />
               <label htmlFor='points'>
                   {currentMatches[id].awayTeam}
               </label>
           </div>
           &nbsp;
           <button
               id='removeMatch'
               onClick={() => {
                   const clone = { ...currentMatches };
                   delete clone[id];
                   setCurrentMatches(clone);
               }}
           >
               Remove
           </button>
           <button id='finishMatch'>
               Finish
           </button>
       </div>
    );
};

export default Match;
