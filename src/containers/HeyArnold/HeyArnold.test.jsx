import React from 'react';
import HeyArnold from './HeyArnold';
import { fetchCharacters } from '../../services/hey-arnold.js';
import { screen, render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../services/hey-arnold.js');

describe('Hey Arnold container', () => {
  it('displays loading screen on load', () => {
    fetchCharacters.mockResolvedValue([
      {
        '_id': '5da237699734fdcb7bef8f56',
        'name': 'Miles Shortman',
        'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/2/2e/Miles.jpg/revision/latest/scale-to-width-down/243?cb=20101115140639'
      },
      {
        '_id': '5da237699734fdcb7bef8f54',
        'name': 'Mitzi',
        'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/d/d9/Mitzi.png/revision/latest/scale-to-width-down/310?cb=20171212070331'
      }
    ]);
    render(
      <MemoryRouter>
        <HeyArnold />
      </MemoryRouter>
    );

    const loading = screen.getByTestId('loading');

    expect(loading).toHaveTextContent('Loading');
  });

  it('displays a list of Characters', async() => {
    fetchCharacters.mockResolvedValue([
      {
        '_id': '5da237699734fdcb7bef8f56',
        'name': 'Miles Shortman',
        'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/2/2e/Miles.jpg/revision/latest/scale-to-width-down/243?cb=20101115140639'
      },
      {
        '_id': '5da237699734fdcb7bef8f54',
        'name': 'Mitzi',
        'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/d/d9/Mitzi.png/revision/latest/scale-to-width-down/310?cb=20171212070331'
      }
    ]);

    render(
      <MemoryRouter>
        <HeyArnold />
      </MemoryRouter>
    );

    const characterList = await screen.findByTestId('characters');

    return waitFor(() => {
      expect(characterList).not.toBeEmptyDOMElement();
    });
  });
});
