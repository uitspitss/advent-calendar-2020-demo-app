import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import { UserList } from './UserList';

describe('organisms/UserList', () => {
  const users = [
    { id: 1, name: 'john' },
    { id: 2, name: 'lisa' },
  ];

  it('Snap Shot', () => {
    const tree = renderer.create(<UserList users={users} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('Behavior', () => {
    beforeEach(() => {
      render(<UserList users={users} />);
    });

    test.todo('something of test');
  });
});
