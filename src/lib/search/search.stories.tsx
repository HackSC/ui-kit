import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Search } from './search';
import React from 'react';

const Story: ComponentMeta<typeof Search> = {
  component: Search,
  title: 'Search',
};
export default Story;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
