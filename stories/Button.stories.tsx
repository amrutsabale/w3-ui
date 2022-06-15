import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, ButtonProps } from '../src';
import { faPhone, faTrash } from '@fortawesome/free-solid-svg-icons';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['solid'],
    },
  },
};

export default meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

const Solid = Template.bind({});
Solid.args = {
  variant: 'solid',
  children: 'Click me',
};

const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
  children: 'Click me',
};

const Link = Template.bind({});
Link.args = {
  variant: 'link',
  children: 'Click me',
};

const Disabled = Template.bind({});
Disabled.args = {
  variant: 'disabled',
  children: 'Click me',
};

const Rounded = Template.bind({});
Rounded.args = {
  children: 'Click me',
  rounded: true,
};

const LeftIcon = Template.bind({});
LeftIcon.args = {
  leftIcon: <FontAwesomeIcon icon={faTrash} />,
  children: 'Delete',
};

const RightIcon = Template.bind({});
RightIcon.args = {
  rightIcon: <FontAwesomeIcon icon={faPhone} />,
  children: 'Call us',
  variant: 'outline',
};

export { Solid, Outline, Link, Disabled, Rounded, LeftIcon, RightIcon };
