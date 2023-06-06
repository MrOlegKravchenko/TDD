import React from 'react';


const Match = ({ id, currentMatches, setCurrentMatches, setMatchesSummary }) => {
    const removeMatchHandler = matchId => {
        const clone = { ...currentMatches };
        delete clone[matchId];
        setCurrentMatches(clone);
    };

    const updateMatchHandler = (matchId, teamScore, value) => {
        const clone = { ...currentMatches };
        clone[matchId][teamScore] = value;
        setCurrentMatches(clone);
    };

    const finishMatchHandler = () => {
        const timestamp = new Date().getTime();
        setMatchesSummary(prevState => ({
            ...prevState,
            [id]: {
                ...currentMatches[id],
                timestamp
            }
        }));
    };

    return (
       <div id={`matchField_${id}`} style={{ display: 'inline-flex', padding: '4px'}}>
           <div id='homeTeam'>
               <span>
                   {currentMatches[id].homeTeam}
               </span>
               <input
                   type='number'
                   id={`${currentMatches[id].id}_homeTeamPoints`}
                   name='points'
                   min='0'
                   step='1'
                   value={currentMatches[id].homeTeamScore}
                   onChange={event => updateMatchHandler(id, 'homeTeamScore', event.target.value)}
               />
           </div>
           &nbsp;
           :
           &nbsp;
           <div id='awayTeam'>
               <input
                   type='number'
                   id={`${currentMatches[id].id}_awayTeamPoints`}
                   name='points'
                   min='0'
                   step='1'
                   value={currentMatches[id].awayTeamScore}
                   onChange={event => updateMatchHandler(id, 'awayTeamScore', event.target.value)}
               />
               <span>
                   {currentMatches[id].awayTeam}
               </span>
           </div>
           &nbsp;
           <button
               id='removeMatchButton'
               onClick={() => removeMatchHandler(id)}
           >
               Remove
           </button>
           <button
               id='finishMatchButton'
               onClick={() => {
                   finishMatchHandler();
                   removeMatchHandler(id);
               }}
           >
               Finish
           </button>
       </div>
    );
};

export default Match;
