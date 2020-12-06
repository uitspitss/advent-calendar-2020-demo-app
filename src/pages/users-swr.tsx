import React, { FC } from 'react';
import { NextPage } from 'next';
import { styled } from 'twin.macro';
import useSWR from 'swr';
import NextErrorComponent from 'next/error';

import { UserList } from 'components/organisms/UserList';
import { User } from 'types/user';
import { jsonFetcher } from 'utils/fetchers';

type UsersPageProps = {
  children?: never;
  className?: string;
};

type Props = {
  data?: { users: User[] };
  error?: { status: number };
} & UsersPageProps;

const Component: FC<Props> = (props) => {
  const { className, data, error } = props;

  if (error) {
    return <NextErrorComponent statusCode={error.status} />;
  }

  if (!data) {
    return <NextErrorComponent statusCode={500} />;
  }

  const { users } = data;

  return (
    <div className={className}>
      SWR
      <UserList users={users} />
    </div>
  );
};

const StyledComponent = styled(Component)``;

const UsersPage: NextPage<UsersPageProps> = (props) => {
  const { data, error } = useSWR('/api/users', jsonFetcher);

  return <StyledComponent {...props} {...{ data, error }} />;
};

export default UsersPage;
