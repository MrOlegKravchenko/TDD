import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import Match from './Match';


const testMatches = {
    'a_b': {
        id: 'a_b',
        homeTeam: 'testHomeTeamName',
        homeTeamScore: 0,
        awayTeam: 'testAwayTeamName',
        awayTeamScore: 0
    }
};
const matchId = Object.keys(testMatches)[0];
const mockSetCurrentMatches = jest.fn();

describe('Match component', () => {
    it('renders default Match values', async () => {
        const container = mount(
            <Match
                id={matchId}
                currentMatches={testMatches}
                setCurrentMatches={mockSetCurrentMatches} />
        );

        expect(container.find('div').at(0).prop('id')).toEqual(`matchField_${Object.values(testMatches)[0].id}`);
        expect(container.find('div#homeTeam label').at(0).text()).toEqual(`${Object.values(testMatches)[0].homeTeam}`);
        expect(container.find('div#awayTeam label').at(0).text()).toEqual(`${Object.values(testMatches)[0].awayTeam}`);
        expect(container.find('button').at(0).prop('id')).toEqual('removeMatchButton');
        expect(container.find('button').at(1).prop('id')).toEqual('finishMatchButton');
    });

    it('change Match values', async () => {
        let container;

        await act(async () => {
            container = await mount(
                <Match
                    id={matchId}
                    currentMatches={testMatches}
                    setCurrentMatches={mockSetCurrentMatches} />
            );
        });
        container.update();

        await act(async () => {
            container.find(`input#${testMatches[matchId].id}_homeTeamPoints`).simulate('change', { persist: jest.fn(), target: { value: 10 } });
        });
        container.update();

        const changedMatchHome = { [matchId]: { ...testMatches[matchId], homeTeamScore: 10 } };
        expect(mockSetCurrentMatches).toHaveBeenNthCalledWith(1, changedMatchHome);

        await act(async () => {
            container.find(`input#${testMatches[matchId].id}_awayTeamPoints`).simulate('change', { persist: jest.fn(), target: { value: 5 } });
        });
        container.update();

        const changedMatchAway = { [matchId]: { ...testMatches[matchId], awayTeamScore: 5 } };
        expect(mockSetCurrentMatches).toHaveBeenNthCalledWith(2, changedMatchAway);
    });

    it('remove current Match', async () => {
        let container;

        await act(async () => {
            container = await mount(
                <Match
                    id={matchId}
                    currentMatches={testMatches}
                    setCurrentMatches={mockSetCurrentMatches} />
            );
        });
        container.update();

        await act(async () => {
            container.find('button#removeMatchButton').at(0).simulate('click');
        });
        container.update();

        expect(mockSetCurrentMatches).toHaveBeenCalled();
    });
});
