import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import base from 'paths.macro';

import { MenuToggleButton, MenuToggleButtonProps } from './MenuToggleButton';

const path = base.replace(
  /^.+\/(atoms|molecules|organisms|templates|pages)\/(.+)\//,
  '$1/$2',
);

export default {
  title: `${path}`,
  component: MenuToggleButton,
  argTypes: {
    isOpen: { control: 'boolean' },
    handleClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story<MenuToggleButtonProps> = (args) => (
  <MenuToggleButton {...args} />
);

export const Closed = Template.bind({});
Closed.args = {
  isOpen: false,
};

export const Open = Template.bind({});
Open.args = {
  isOpen: true,
};
