import React, { FC } from 'react';
import tw, { styled } from 'twin.macro';
import Link from 'next/link';

export type HeaderMenuProps = {
  className?: string;
  children?: never;
};

type Props = HeaderMenuProps;

const Component: FC<Props> = (props) => {
  const { className } = props;

  return (
    <div className={className}>
      <Link href="/users-ssr">Users SSR</Link>
      <a href="/users-ssg">Users SSG</a>
      <a href="/users-swr">Users useSWR</a>
    </div>
  );
};

const StyledComponent = styled(Component)`
  ${tw`text-sm lg:flex-grow`}

  & > a {
    ${tw`block mt-4 lg:inline-block lg:mt-0 text-gray-500`}

    &:not(:last-child) {
      ${tw`mr-4`}
    }
  }
`;

/**
 * ヘッダー内のメニュー
 */
export const HeaderMenu: FC<HeaderMenuProps> = (props) => (
  <StyledComponent {...props} />
);
