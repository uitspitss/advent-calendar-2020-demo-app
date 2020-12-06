import React from 'react';
import renderer from 'react-test-renderer';

import { HeaderMenu } from './HeaderMenu';

describe('HeaderMenuList', () => {
  test('Snap Shot', () => {
    const tree = renderer.create(<HeaderMenu />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
