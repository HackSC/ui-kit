import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Switch } from './switch';
import React from 'react';

const Story: ComponentMeta<typeof Switch> = {
  component: Switch,
  title: 'Switch',
};
export default Story;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: '',
};
