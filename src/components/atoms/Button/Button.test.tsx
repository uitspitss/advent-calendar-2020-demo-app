import React from 'react';
import renderer from 'react-test-renderer';

import { Button } from './Button';

describe('Button', () => {
  test('Snap Shot', () => {
    const tree = renderer.create(<Button label="button" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
