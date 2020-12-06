---
to: <%= abs_path %>/<%= component_name %>.tsx
---
import React, { FC } from 'react';
import tw, { styled } from 'twin.macro';

export type <%= component_name %>Props = {
  /**
   * class for twin.macro
   */
  className?: string;
  /**
   * no children
   */
  children?: never;
};

type Props = <%= component_name %>Props;

const Component: FC<Props> = (props) => {
  const { className } = props;

  return (
    <<%= tag %> className={className} >
    </<%= tag %>>
  )
}

const StyledComponent = styled(Component)`
` as typeof Component;

/**
 * TODO: write an explanation of <%= component_name %>
 */
export const <%= component_name %>: FC<<%= component_name %>Props> = (props) => {
  return (
    <StyledComponent {...props} />
  );
}
