import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterList from './CharacterList';
import { MemoryRouter } from "react-router-dom";

describe('CharacterList component', () => {
  afterEach(() => cleanup());
  it('renders CharacterList', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <CharacterList 
          data={[
            {
              name: 'Test',
              image: 'http://placecage.com/200/200',
              _id: '12345'
            }
          ]}
        />
      </MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});
