import React, { FC, ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

import { Header } from 'components/organisms/Header';
import { Footer } from 'components/organisms/Footer';
import { CookieNotification } from 'components/molecules/CookieNotification';

export type LayoutProps = {
  children: ReactNode;
  className?: string;
};

type Props = LayoutProps;

const Component: FC<Props> = (props) => {
  const { children, className } = props;

  return (
    <div className={className}>
      <CookieNotification className="cookieNotification" />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

const StyledComponent = styled(Component)`
  & > main {
    ${tw`grid place-items-center py-10`}
  }
`;

/**
 * レイアウト
 */
export const Layout: FC<LayoutProps> = (props) => (
  <StyledComponent {...props} />
);
