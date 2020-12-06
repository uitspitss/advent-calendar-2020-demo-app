import React, { FC } from 'react';
import { NextPage, GetServerSideProps } from 'next';
import { styled } from 'twin.macro';

import { UserList } from 'components/organisms/UserList';
import { User } from 'types/user';
import { getData } from './api/users';

type UsersPageProps = {
  children?: never;
  className?: string;
  users: User[];
};

type Props = UsersPageProps;

const Component: FC<Props> = (props) => {
  const { className, users } = props;

  return (
    <div className={className}>
      SSR
      <UserList users={users} />
    </div>
  );
};

const StyledComponent = styled(Component)``;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { users } = await getData();

    return { props: { users } };
  } catch {
    throw new Error('User API is wrong.');
  }
};

const UsersPage: NextPage<UsersPageProps> = (props) => (
  <StyledComponent {...props} />
);

export default UsersPage;
