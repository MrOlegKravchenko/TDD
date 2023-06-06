import React from 'react';
import { render, screen } from '@testing-library/react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import App from './App';

describe('App component', () => {
  it('renders header text', () => {
    render(<App />);
    const linkElement = screen.getByText('Live Football World Cup Scoreboard');
    expect(linkElement).toBeInTheDocument();
  });

  it('renders header main element and all 3 component inside', async () => {
    let component;

    await act(async () => {
      component = mount(<App />);
    });
    component.update();

    expect(component.find('AddField').exists()).toBeTruthy();
    expect(component.find('CurrentMatches').exists()).toBeFalsy();
    expect(component.find('MatchesSummary').exists()).toBeFalsy();
  });
});
