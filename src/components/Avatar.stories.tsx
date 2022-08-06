import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Avatar} from './Avatar';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Avatar',
    component: Avatar,
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    avatar: 'https://avatars.githubusercontent.com/u/97145056?v=4',
    name:'Abdur Rehman',
    role:'React Engineer'
};

export const Trimmed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Trimmed.args = {
    avatar: 'https://avatars.githubusercontent.com/u/97145056?v=4',
    name:'Abdur Rehman 111111111111111111',
    role:'React Engineer 122222222222'
};

