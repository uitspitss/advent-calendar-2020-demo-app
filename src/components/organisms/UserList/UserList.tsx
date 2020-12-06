import React, { FC } from 'react';
import tw, { styled } from 'twin.macro';

import { User } from 'types/user';

export type UserListProps = {
  /**
   * class for twin.macro
   */
  className?: string;
  /**
   * no children
   */
  children?: never;
  /**
   * user data
   */
  users: User[];
};

type Props = UserListProps;

const Component: FC<Props> = (props) => {
  const { className, users } = props;

  return (
    <div className={className}>
      {users.map(({ id, name }) => (
        <p key={name}>
          {id}
          {': '}
          {name}
        </p>
      ))}
    </div>
  );
};

const StyledComponent = styled(Component)``;

/**
 * TODO: write an explanation of UserList
 */
export const UserList: FC<UserListProps> = (props) => (
  <StyledComponent {...props} />
);
