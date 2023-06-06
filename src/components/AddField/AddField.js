import React, { useState } from 'react';

import style from './AddField.module.scss'

const AddField = ({ setCurrentMatches }) => {
    const [homeTeamName, setHomeTeamName] = useState('');
    const [awayTeamName, setAwayTeamName] = useState('');

    const createMatchHandler = () => {
        setCurrentMatches(prevState => ({
            ...prevState,
            [`${homeTeamName}_${awayTeamName}`]: ({
                id: `${homeTeamName}_${awayTeamName}`,
                homeTeam: homeTeamName,
                homeTeamScore: 0,
                awayTeam: awayTeamName,
                awayTeamScore: 0
            })
        }));
    };

    return (
       <div id='addField'>
           <input
               type='text'
               id='homeTeam'
               placeholder='Home Team Name'
               className={style.addTeamInputs}
               value={homeTeamName}
               onChange={event => setHomeTeamName(event.target.value)}/>
           &nbsp;
           :
           &nbsp;
           <input
               type='text'
               id='awayTeam'
               placeholder='Away Team Name'
               className={style.addTeamInputs}
               value={awayTeamName}
               onChange={event => setAwayTeamName(event.target.value)}
           />
           <button
               id='addMatchButton'
               className={style.addButton}
               disabled={awayTeamName.length === 0 || homeTeamName.length === 0}
               onClick={() => {
                   createMatchHandler();
                   setHomeTeamName('');
                   setAwayTeamName('');
               }}
           >
               Add new Match
           </button>
       </div>
    );
};

export default AddField;
