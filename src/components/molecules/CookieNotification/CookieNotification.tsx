import React, { FC } from 'react';
import tw, { styled } from 'twin.macro';
import { keyframes } from '@emotion/react';
import CookieConsent from 'react-cookie-consent';

export type CookieNotificationProps = {
  /**
   * class for twin.macro
   */
  className?: string;
  /**
   * no children
   */
  children?: never;
  /**
   * whether debug
   */
  debug?: boolean;
};

type Props = {
  handleDecline?: () => void;
} & CookieNotificationProps;

const Component: FC<Props> = (props) => {
  const { className, debug = false } = props;

  return (
    <CookieConsent
      disableStyles
      flipButtons
      location="top"
      containerClasses={className}
      buttonClasses="acceptButton"
      // enableDeclineButton
      // declineButtonClasses="declineButton"
      // onDecline={handleDecline}
      debug={debug}
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
};

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const StyledComponent = styled(Component)`
  animation: ${slideIn} 0.5s ease;

  ${tw`flex flex-wrap w-full justify-between items-center bg-info-500 text-white text-sm font-bold px-4 py-3 transition duration-500 ease-in-out`}

  & > div {
    & > .acceptButton {
      ${tw`bg-secondary-500 hover:bg-secondary-700 text-white font-bold py-2 px-4 mr-2 border-none cursor-pointer`}
    }
    & > .declineButton {
      ${tw`bg-transparent no-underline hover:underline text-white font-bold py-2 px-4 border-none cursor-pointer`}
    }
  }
`;

/**
 * cookie の利用確認用 notification
 */
export const CookieNotification: FC<CookieNotificationProps> = (props) => {
  const handleDecline = () => {
    // Cookies.remove('_ga');
    // Cookies.remove(`_ga_${GA_TRACKING_ID}`);
  };

  return <StyledComponent {...props} {...{ handleDecline }} />;
};
