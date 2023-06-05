import React from 'react';
import { mount } from 'enzyme';
import { act } from '@testing-library/react';

import MatchesSummary from './MatchesSummary';


const finishedMatches = {
    'a_b': {
        id: 'a_b',
        homeTeam: 'a',
        homeTeamScore: 0,
        awayTeam: 'b',
        awayTeamScore: 1
    },
    'x_y': {
        id: 'x_y',
        homeTeam: 'x',
        homeTeamScore: 2,
        awayTeam: 'y',
        awayTeamScore: 3
    }
};
const mockSetCurrentMatches = jest.fn();

describe('Matches Summary component', () => {
    it('renders finished Matches', async () => {
        let component;

        await act(async () => {
            component = mount(<MatchesSummary matchesSummary={finishedMatches} setMatchesSummary={mockSetCurrentMatches} />);
        });
        component.update();

        expect(component.find('h3').at(0).text()).toEqual('Summary');
        expect(component.find(`span#finishedMatch_${Object.values(finishedMatches)[0].id}_homeTeam span`).at(0).text()).toEqual(`${Object.values(finishedMatches)[0].homeTeamScore}`);
        expect(component.find(`span#finishedMatch_${Object.values(finishedMatches)[0].id}_homeTeam label`).at(0).text()).toEqual(`${Object.values(finishedMatches)[0].homeTeam}`);
        expect(component.find(`span#finishedMatch_${Object.values(finishedMatches)[0].id}_awayTeam span`).at(0).text()).toEqual(`${Object.values(finishedMatches)[0].awayTeamScore}`);
        expect(component.find(`span#finishedMatch_${Object.values(finishedMatches)[0].id}_awayTeam label`).at(0).text()).toEqual(`${Object.values(finishedMatches)[0].awayTeam}`);

        expect(component.find(`span#finishedMatch_${Object.values(finishedMatches)[1].id}_homeTeam span`).at(0).text()).toEqual(`${Object.values(finishedMatches)[1].homeTeamScore}`);
        expect(component.find(`span#finishedMatch_${Object.values(finishedMatches)[1].id}_homeTeam label`).at(0).text()).toEqual(`${Object.values(finishedMatches)[1].homeTeam}`);
        expect(component.find(`span#finishedMatch_${Object.values(finishedMatches)[1].id}_awayTeam span`).at(0).text()).toEqual(`${Object.values(finishedMatches)[1].awayTeamScore}`);
        expect(component.find(`span#finishedMatch_${Object.values(finishedMatches)[1].id}_awayTeam label`).at(0).text()).toEqual(`${Object.values(finishedMatches)[1].awayTeam}`);
    });
});
