import React from 'react';

const MatchesSummary = ({ matchesSummary }) => {
    return (
       <div id='finishedMatchesField' style={{margin: "12px", border: "2px solid gray"}}>
           <h3>Summary</h3>
           {Object.values(matchesSummary)
               ?.map(match => {
                   return (
                       <div key={`finishedMatch_${match.id}`}>
                           <span id={`finishedMatch_${match.id}_homeTeam`}>
                               <label htmlFor='points'>
                                   {match.homeTeam}
                               </label>
                               <span>{match.homeTeamScore}</span>
                           </span>
                           &nbsp;
                           :
                           &nbsp;
                           <span id={`finishedMatch_${match.id}_awayTeam`}>
                               <span>{match.awayTeamScore}</span>
                               <label htmlFor='points'>
                                   {match.awayTeam}
                               </label>
                           </span>
                           &nbsp;
                       </div>
                   )})}
       </div>
    );
};

export default MatchesSummary;
