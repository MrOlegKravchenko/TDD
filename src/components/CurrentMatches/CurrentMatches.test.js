import React from 'react';
import { mount } from 'enzyme';
import { act } from '@testing-library/react';

import CurrentMatches from './CurrentMatches';


const testMatches = {
    'a_b': {
        id: 'a_b',
        homeTeam: 'a',
        homeTeamScore: 0,
        awayTeam: 'b',
        awayTeamScore: 0
    },
    'x_y': {
        id: 'x_y',
        homeTeam: 'x',
        homeTeamScore: 0,
        awayTeam: 'y',
        awayTeamScore: 0
    }
};
const mockSetCurrentMatches = jest.fn();

describe('Current Matches component', () => {
    it('renders default Matches', async () => {
        let component;

        await act(async () => {
            component = mount(<CurrentMatches currentMatches={testMatches} setCurrentMatches={mockSetCurrentMatches} />);
        });
        component.update();

        expect(component.find('Match').at(0).prop('id')).toEqual(`${Object.keys(testMatches)[0]}`);
        expect(component.find('Match').at(1).prop('id')).toEqual(`${Object.keys(testMatches)[1]}`);
        expect(component.find('Match')).toHaveLength(2);
    });

    it.skip('add a new Match', async () => {
        let component;
        const newMatch = {
            id: 'n_m',
            homeTeam: 'n',
            homeTeamScore: 0,
            awayTeam: 'm',
            awayTeamScore: 0
        };

        await act(async () => {
            component = await mount(<CurrentMatches currentMatches={testMatches} setCurrentMatches={mockSetCurrentMatches} />);
            await mockSetCurrentMatches({ ...testMatches, [newMatch.id]: newMatch });
        });
        component.update();

        expect(component.find('Match')).toHaveLength(3);
    });
});
