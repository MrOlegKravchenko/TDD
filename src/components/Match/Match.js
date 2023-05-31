import React from 'react';

const Match = ({ id, currentMatches, setCurrentMatches }) => {
    return (
       <div id={`matchField_${id}`}>
           <button
               id='removeMatch'
               onClick={() => {
                   delete currentMatches[id];
                   setCurrentMatches(currentMatches);
               }}
           >
               Remove
           </button>
           <span id='homeTeam'>{currentMatches[id].homeTeam}</span>
           &nbsp;
           :
           &nbsp;
           <span id='awayTeam'>{currentMatches[id].awayTeam}</span>
           <button id='finishMatch'>
               Finish
           </button>
       </div>
    );
};

export default Match;