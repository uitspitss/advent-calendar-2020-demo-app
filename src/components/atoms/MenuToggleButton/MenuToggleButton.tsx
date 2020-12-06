import React, { FC, ComponentPropsWithRef } from 'react';
import tw, { styled } from 'twin.macro';

export type MenuToggleButtonProps = {
  children?: never;
  className?: string;
  /**
   * トグルステータス
   */
  isOpen: boolean;
  /**
   * クリックハンドラ
   */
  handleClick: () => void;
} & ComponentPropsWithRef<'button'>;

type Props = MenuToggleButtonProps;

const Component: FC<Props> = (props) => {
  const { className, handleClick } = props;

  return (
    <button className={className} type="button" onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          className="open"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
        <path
          className="closed"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
};

const StyledComponent = styled(Component)<Pick<Props, 'isOpen'>>`
  ${tw`flex items-center px-3 py-2 border rounded bg-transparent border-0`}

  svg {
    ${tw`w-6 h-6`}
    path {
      ${tw`transition duration-100 ease-in`}
      &.open {
        ${({ isOpen }) => (isOpen ? tw`opacity-100` : tw`opacity-0`)}
      }
      &.closed {
        ${({ isOpen }) => (isOpen ? tw`opacity-0` : tw`opacity-100`)}
      }
    }
  }
`;

/**
 * ヘッダーのモバイルレイアウトでのトグルボタン
 */
export const MenuToggleButton: FC<MenuToggleButtonProps> = (props) => (
  <StyledComponent {...props} />
);
