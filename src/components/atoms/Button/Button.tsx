import React, { FC, ComponentPropsWithRef } from 'react';
import tw, { styled } from 'twin.macro';

export type ButtonProps = {
  children?: never;
  className?: string;
  /**
   * ラベル
   */
  label: string;
  /**
   * 背景色
   */
  primary?: boolean;
  /**
   * 背景色
   */
  secondary?: boolean;
  /**
   * サイズ
   */
  size?: 'large' | 'small';
} & ComponentPropsWithRef<'button'>;

type Props = ButtonProps;

const Component: FC<Props> = (props) => {
  const { className, label, type } = props;

  return (
    <button
      className={className}
      type={type && type === 'submit' ? 'submit' : 'button'}
    >
      {label}
    </button>
  );
};

const StyledComponent = styled(Component)<
  Pick<Props, 'primary' | 'secondary' | 'size'>
>`
  ${tw`text-base rounded border-none p-2`}

  /* color */
  ${({ primary }) => primary && tw`bg-primary-500 text-gray-200`}
  ${({ secondary }) => secondary && tw`bg-secondary-500 text-gray-200`}

  /* size */
  ${({ size }) => size === 'large' && tw`text-lg`}
  ${({ size }) => size === 'small' && tw`text-sm`}
`;

/**
 * Primary UI component for user interaction
 */
export const Button: FC<ButtonProps> = (props) => (
  <StyledComponent {...props} />
);
