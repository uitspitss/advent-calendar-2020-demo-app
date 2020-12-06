import React from 'react';
import renderer from 'react-test-renderer';

import { Footer } from './Footer';

describe('Footer', () => {
  test('Snap Shot', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
