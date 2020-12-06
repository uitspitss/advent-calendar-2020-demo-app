---
to: <%= abs_path %>/<%= component_name %>.test.tsx
---
import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import { <%= component_name %> } from './<%= component_name %>';

describe('<%= path %>', () => {
  it('Snap Shot', () => {
    const tree = renderer.create(<<%= component_name %> />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('Behavior', () => {
    beforeEach(() => {
      render(<<%= component_name %> />);
    });

    test.todo('something of test');
  });
});
