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

const disorderedFinishedMatches = {
    'bel_nor': {
        id: 'bel_nor',
        homeTeam: 'bel',
        homeTeamScore: 0,
        awayTeam: 'nor',
        awayTeamScore: 1
    },
    'uzb_usa': {
        id: 'uzb_usa',
        homeTeam: 'uzb',
        homeTeamScore: 7,
        awayTeam: 'usa',
        awayTeamScore: 7
    },
    'ger_pol': {
        id: 'ger_pol',
        homeTeam: 'ger',
        homeTeamScore: 2,
        awayTeam: 'pol',
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
        expect(component.find(`span#finishedMatch_${Object.values(finishedMatches)[0].id}_homeTeam strong`).at(0).text()).toEqual(`${Object.values(finishedMatches)[0].homeTeam}`);
        expect(component.find(`span#finishedMatch_${Object.values(finishedMatches)[0].id}_awayTeam span`).at(0).text()).toEqual(`${Object.values(finishedMatches)[0].awayTeamScore}`);
        expect(component.find(`span#finishedMatch_${Object.values(finishedMatches)[0].id}_awayTeam strong`).at(0).text()).toEqual(`${Object.values(finishedMatches)[0].awayTeam}`);

        expect(component.find(`span#finishedMatch_${Object.values(finishedMatches)[1].id}_homeTeam span`).at(0).text()).toEqual(`${Object.values(finishedMatches)[1].homeTeamScore}`);
        expect(component.find(`span#finishedMatch_${Object.values(finishedMatches)[1].id}_homeTeam strong`).at(0).text()).toEqual(`${Object.values(finishedMatches)[1].homeTeam}`);
        expect(component.find(`span#finishedMatch_${Object.values(finishedMatches)[1].id}_awayTeam span`).at(0).text()).toEqual(`${Object.values(finishedMatches)[1].awayTeamScore}`);
        expect(component.find(`span#finishedMatch_${Object.values(finishedMatches)[1].id}_awayTeam strong`).at(0).text()).toEqual(`${Object.values(finishedMatches)[1].awayTeam}`);
    });

    it('order finished Matches by the total score', async () => {
        let component;

        await act(async () => {
            component = mount(<MatchesSummary matchesSummary={disorderedFinishedMatches} setMatchesSummary={mockSetCurrentMatches} />);
        });
        component.update();

        const findRenderedHomeTeamNameByN = n => component.find('strong.finishedHomeTeam').at(n).text();

        expect(findRenderedHomeTeamNameByN(0)).toEqual('uzb');
        expect(findRenderedHomeTeamNameByN(1)).toEqual('ger');
        expect(findRenderedHomeTeamNameByN(2)).toEqual('bel');
    });
});
