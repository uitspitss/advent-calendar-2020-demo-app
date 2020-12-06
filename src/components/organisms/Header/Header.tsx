import React, { FC, useState } from 'react';
import tw, { styled } from 'twin.macro';
import Link from 'next/link';

import { MenuToggleButton } from 'components/atoms/MenuToggleButton';
import { HeaderMenu } from 'components/molecules/HeaderMenu';

export type HeaderProps = {
  children?: never;
  className?: string;
};

type Props = {
  isOpen: boolean;
  handleClick: () => void;
} & HeaderProps;

const Component: FC<Props> = (props) => {
  const { className, isOpen, handleClick } = props;

  return (
    <header className={className}>
      <div>
        <nav>
          <div className="title">
            <Link href="/">
              <span>*WEBSITE TITLE*</span>
            </Link>
          </div>
          <div className="toggleButton">
            <MenuToggleButton
              isOpen={isOpen}
              handleClick={handleClick}
              type="button"
            />
          </div>
          <div className="menuList">
            <HeaderMenu />
          </div>
        </nav>
      </div>
    </header>
  );
};

const StyledComponent = styled(Component)<Pick<Props, 'isOpen'>>`
  & > div {
    ${tw`bg-primary-300 mb-2 lg:mb-4`}
    & > nav {
      ${tw`flex flex-wrap items-center justify-between py-2 px-2 lg:px-6`}

      & > .title {
        ${tw`flex items-center flex-shrink-0 mr-6`}
        & > span {
          ${tw`text-gray-100 font-semibold text-xl tracking-tight`}
        }
      }

      & > .toggleButton {
        ${tw`flex lg:hidden`}
      }

      & > .menuList {
        ${tw`w-full flex-grow lg:flex lg:items-center lg:w-auto`}
        ${({ isOpen }) => (isOpen ? tw`block` : tw`hidden lg:block`)}
      }
    }
  }
`;

/**
 * ヘッダーナビゲーション
 */
export const Header: FC<HeaderProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledComponent {...props} isOpen={isOpen} handleClick={handleClick} />
  );
};
