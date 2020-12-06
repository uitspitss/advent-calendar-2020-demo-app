import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import { CookieNotification } from './CookieNotification';

describe('molecules/CookieNotification', () => {
  it('Snap Shot', () => {
    const tree = renderer.create(<CookieNotification />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('Behavior', () => {
    beforeEach(() => {
      render(<CookieNotification />);
    });

    test.todo('something of test');
  });
});
