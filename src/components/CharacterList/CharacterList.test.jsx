import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterList from './CharacterList';

describe('CharacterList component', () => {
  afterEach(() => cleanup());
  it('renders CharacterList', () => {
    const { asFragment } = render(<CharacterList 
      data={[
        {
          name: 'Test',
          image: 'http://placecage.com/200/200',
          _id: '12345'
        }
      ]}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
