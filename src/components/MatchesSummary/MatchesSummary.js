import React from 'react';

import style from './MatchesSummary.module.scss'

const MatchesSummary = ({ matchesSummary }) => {
    const cloneMatches = JSON.parse(JSON.stringify(matchesSummary));

    const orderedList =
        Object.values(cloneMatches)
            .sort((prevMatch, match) =>
                (prevMatch.homeTeamScore + prevMatch.awayTeamScore) - (match.homeTeamScore + match.awayTeamScore))
            .reverse()
            .map(el => matchesSummary[el.id]);

    return (
       <div id='finishedMatchesField' className={style.MatchesSummary}>
           <h3>Summary</h3>
           {Object.values(orderedList)
               ?.map((match, i) => (
                       <div
                           key={`finishedMatch_${match.id}`}
                           className={style.eachFinishedMatch}
                       >
                           <span className={style.matchNumber}>{i+1}.</span>
                           <span id={`finishedMatch_${match.id}_homeTeam`}>
                               <strong className={style.finishedHomeTeam}>
                                   {match.homeTeam}
                               </strong>
                               <span className={style.matchScore}>
                                   {match.homeTeamScore}
                               </span>
                           </span>
                           &nbsp;
                           :
                           &nbsp;
                           <span id={`finishedMatch_${match.id}_awayTeam`}>
                               <span className={style.matchScore}>{match.awayTeamScore}</span>
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
