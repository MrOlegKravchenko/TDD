import React from 'react';

import style from './CurrentMatches.module.scss'
import Match from '../Match/Match';

const CurrentMatches = ({ currentMatches, setCurrentMatches, setMatchesSummary }) => {
    return (
       <div id='currentMatchesField' className={style.currentMatches}>
           <h3>Current Matches</h3>
           {Object.values(currentMatches)
               ?.map(currentMatch => {
                   return (
                       <React.Fragment key={currentMatch.id}>
                           <Match
                               id={currentMatch.id}
                               currentMatches={currentMatches}
                               setCurrentMatches={setCurrentMatches}
                               setMatchesSummary={setMatchesSummary}
                           />
                       </React.Fragment>
                   )})}
       </div>
    );
};

export default CurrentMatches;