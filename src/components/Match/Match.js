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
               <label  htmlFor='points'>
                   {currentMatches[id].homeTeam}
               </label>
               <input
                   type='number'
                   id={`${currentMatches[id].id}_homeTeamPoints`}
                   name='points'
                   style={{
                       padding: 0,
                       width: '30px',
                       margin: '0 10px'
                   }}
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
                   style={{
                       padding: 0,
                       width: '30px',
                       margin: '0 10px'
                   }}
                   min='0'
                   step='1'
                   value={currentMatches[id].awayTeamScore}
                   onChange={event => updateMatchHandler(id, 'awayTeamScore', event.target.value)}
               />
               <label htmlFor='points'>
                   {currentMatches[id].awayTeam}
               </label>
           </div>
           &nbsp;
           <button
               id='removeMatchButton'
               style={{backgroundColor: 'lightcoral'}}
               onClick={() => removeMatchHandler(id)}
           >
               Remove
           </button>
           <button
               id='finishMatchButton'
               style={{backgroundColor: 'lightblue'}}
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
