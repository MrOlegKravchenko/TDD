import React from 'react';
import { mount } from 'enzyme';

import Matches from './Match';


describe('Current Match component', () => {
    it('renders default Match values', async () => {
        const mockSetCurrentMatches = jest.fn();
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

        const container = mount(
            <Matches
                id={testMatch.id}
                currentMatches={testMatch}
                setCurrentMatches={mockSetCurrentMatches} />
        );

        expect(container.find('button').at(0).prop('id')).toEqual('removeMatch');
        expect(container.find('div').at(0).prop('id')).toEqual(`matchField_${testMatch.id}`);
        expect(container.find('span#homeTeam').at(0).text()).toEqual('testHomeTeamName');
        expect(container.find('span#awayTeam').at(0).text()).toEqual('testAwayTeamName');
        expect(container.find('button').at(1).prop('id')).toEqual('finishMatch');
    });
})
