import React from 'react';

import Match from '../Match/Match';

const CurrentMatches = ({ currentMatches, setCurrentMatches, setMatchesSummary }) => {
    return (
       <div id='currentMatchesField'>
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