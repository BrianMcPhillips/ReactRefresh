import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';

describe('CharacterDetail component', () => {
  afterEach(() => cleanup());
  it('renders CharacterDetail', () => {
    const { asFragment } = render(<CharacterDetail 
      name="Test"
      image="http://placecage.com/200/200"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
