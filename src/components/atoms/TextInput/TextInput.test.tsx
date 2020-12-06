import React from 'react';
import renderer from 'react-test-renderer';

import { TextInput } from './TextInput';

describe('TextInput', () => {
  test('Snap Shot', () => {
    const tree = renderer.create(<TextInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
