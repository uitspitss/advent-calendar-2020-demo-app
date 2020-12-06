import React from 'react';
import renderer from 'react-test-renderer';

import { Layout } from './Layout';

describe('Layout', () => {
  test('Snap Shot', () => {
    const tree = renderer
      .create(
        <Layout>
          <a href="/">link</a>
        </Layout>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
