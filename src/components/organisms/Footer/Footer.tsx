import React, { FC } from 'react';
import tw, { styled } from 'twin.macro';

import { copyrightYears } from 'utils';

export type FooterProps = {
  children?: never;
  className?: string;
};

type Props = FooterProps;

const Component: FC<Props> = (props) => {
  const { className } = props;

  return (
    <footer className={className}>
      <div>
        <p>
          ©{copyrightYears(2020)} *WEBSITE TITLE* —
          <a
            href="https://twitter.com/uitspitss"
            rel="noopener noreferrer"
            target="_blank"
          >
            @uitspitss
          </a>
        </p>
      </div>
    </footer>
  );
};

const StyledComponent = styled(Component)`
  & > div {
    ${tw`flex items-center sm:flex-row flex-col py-2 px-2 lg:px-6`}

    & > p {
      ${tw`text-sm text-gray-500`}
      & > a {
        ${tw`text-gray-600 ml-1 no-underline`}
      }
    }
  }
`;

/**
 * フッター
 */
export const Footer: FC<FooterProps> = (props) => (
  <StyledComponent {...props} />
);
