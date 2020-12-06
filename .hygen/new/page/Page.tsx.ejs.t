---
to: <%= abs_path %>.tsx
---
import React, { FC } from 'react';
import { NextPage } from 'next';
import tw, { styled } from 'twin.macro';

type <%= page_name %>PageProps = {
  /**
   * class for twin.macro
   */
  className?: string;
  /**
   * no children
   */
  children?: never;
};

type Props = <%= page_name %>PageProps;

const Component: FC<Props> = (props) => {
  const { className } = props;

  return (
    <div className={className} >
    </div>
  )
}

const StyledComponent = styled(Component)``;

/**
 * TODO: write an explanation of <%= page_name %>Page
 */
const <%= page_name %>Page: NextPage<<%= page_name %>PageProps> = (props) => {
  return (
    <StyledComponent {...props} />
  );
}

export default <%= page_name %>Page;
