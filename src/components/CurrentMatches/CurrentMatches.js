import React from 'react';

import Match from '../Match/Match';

const CurrentMatches = ({ currentMatches, setCurrentMatches }) => {
    return (
       <div id='currentMatchesField'>
           {currentMatches !== null && Object.values(currentMatches)
               ?.map(currentMatch => {
                   return (
                       <React.Fragment key={currentMatch.id}>
                           <Match
                               id={currentMatch.id}
                               currentMatches={currentMatches}
                               setCurrentMatches={setCurrentMatches}
                           />
                       </React.Fragment>
                   )})}
       </div>
    );
};

export default CurrentMatches;