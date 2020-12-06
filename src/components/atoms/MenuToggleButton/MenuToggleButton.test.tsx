import React from 'react';
import renderer from 'react-test-renderer';

import { MenuToggleButton } from './MenuToggleButton';

describe('MenuToggleButton', () => {
  test('Snap Shot', () => {
    const isOpen = false;
    const handleClick = () => {};
    const tree = renderer
      .create(<MenuToggleButton isOpen={isOpen} handleClick={handleClick} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
