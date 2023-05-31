import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import Matches from './Match';


const testMatch = {
    id: 'a_b',
    'a_b': {
        id: 'a_b',
        homeTeam: 'testHomeTeamName',
        homeTeamScore: 0,
        awayTeam: 'testAwayTeamName',
        awayTeamScore: 0
    }
};
const mockSetCurrentMatches = jest.fn();

describe('Current Match component', () => {
    it('renders default Match values', async () => {
        const container = mount(
            <Matches
                id={testMatch.id}
                currentMatches={testMatch}
                setCurrentMatches={mockSetCurrentMatches} />
        );

        expect(container.find('div').at(0).prop('id')).toEqual(`matchField_${testMatch.id}`);
        expect(container.find('div#homeTeam label').at(0).text()).toEqual('testHomeTeamName');
        expect(container.find('div#awayTeam label').at(0).text()).toEqual('testAwayTeamName');
        expect(container.find('button').at(0).prop('id')).toEqual('removeMatch');
        expect(container.find('button').at(1).prop('id')).toEqual('finishMatch');
    });

    it('change Match values', async () => {
        let container;

        await act(async () => {
            container = await mount(
                <Matches
                    id={testMatch.id}
                    currentMatches={testMatch}
                    setCurrentMatches={mockSetCurrentMatches} />
            );
        });
        container.update();

        await act(async () => {
            container.find('input#homeTeamPoints').at(0).simulate('change', { persist: jest.fn(), target: { value: 10 } });
            container.find('input#awayTeamPoints').at(0).simulate('change', { persist: jest.fn(), target: { value: 5 } });
        });
        container.update();

        expect(container.find('input#homeTeamPoints').at(0).prop('value')).toEqual(10);
        expect(container.find('input#awayTeamPoints').at(0).prop('value')).toEqual(5);
    });

    it('remove current Match', async () => {
        let container;

        await act(async () => {
            container = await mount(
                <Matches
                    id={testMatch.id}
                    currentMatches={testMatch}
                    setCurrentMatches={mockSetCurrentMatches} />
            );
        });
        container.update();

        await act(async () => {
            container.find('button#removeMatch').at(0).simulate('click');
        });
        container.update();

        expect(mockSetCurrentMatches).toHaveBeenCalled();
    });
});
