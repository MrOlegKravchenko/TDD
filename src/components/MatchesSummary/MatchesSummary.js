import React from 'react';

const MatchesSummary = ({ matchesSummary }) => {
    const cloneMatches = JSON.parse(JSON.stringify(matchesSummary));

    const orderedList =
        Object.values(cloneMatches)
            .sort((prevMatch, match) =>
                (prevMatch.homeTeamScore + prevMatch.awayTeamScore) - (match.homeTeamScore + match.awayTeamScore))
            .reverse()
            .map(el => matchesSummary[el.id]);

    return (
       <div id='finishedMatchesField' style={{margin: '12px'}}>
           <h3>Summary</h3>
           {Object.values(orderedList)
               ?.map(match => (
                       <div key={`finishedMatch_${match.id}`}>
                           <span id={`finishedMatch_${match.id}_homeTeam`}>
                               <strong className='finishedHomeTeam'>
                                   {match.homeTeam}
                               </strong>
                               <span>{match.homeTeamScore}</span>
                           </span>
                           &nbsp;
                           :
                           &nbsp;
                           <span id={`finishedMatch_${match.id}_awayTeam`}>
                               <span>{match.awayTeamScore}</span>
                               <strong>
                                   {match.awayTeam}
                               </strong>
                           </span>
                           &nbsp;
                       </div>
                   ))}
       </div>
    );
};

export default MatchesSummary;
