import React from 'react';
import { shallow } from 'enzyme';
import { act } from '@testing-library/react';

import AddField from './AddField';


describe('Add Field component', () => {
    it('renders home and away team inputs', () => {
        const container = shallow(<AddField />);

        const homeTeamElement = container.find('input#homeTeam');
        const awayTeamElement = container.find('input#awayTeam');

        expect(homeTeamElement).toHaveLength(1);
        expect(awayTeamElement).toHaveLength(1);
    });

    it('change home and away team inputs', async () => {
        const container = shallow(<AddField currentMatches={null} setCurrentMatches={() => {}} />);

        const homeTeamElement = container.find('input#homeTeam');
        const awayTeamElement = container.find('input#awayTeam');
        const buttonElement = container.find('button#addMatchButton');

        await act(async () => {
            homeTeamElement.at(0).simulate('change', { persist: jest.fn(), target: { value: 'home test' } });
            awayTeamElement.at(0).simulate('change', { persist: jest.fn(), target: { value: 'away test' } });
        });
        container.update();

        expect(container.find('input#homeTeam').at(0).prop('value')).toEqual('home test');
        expect(container.find('input#awayTeam').at(0).prop('value')).toEqual('away test');

        await act(async () => {
            buttonElement.at(0).simulate('click', {});
        });
        container.update();

        expect(container.find('input#homeTeam').at(0).prop('value')).toEqual('');
        expect(container.find('input#awayTeam').at(0).prop('value')).toEqual('');
    });
});

