import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Input} from './Input';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Input',
    component: Input,
    parameters: {
        backgrounds: {
            default: 'primary',
            values: [
                {name: 'primary', value: '#4D2C5E'},
                {name: 'secondary', value: '#FF7426'},
                {name: 'light', value: '#FDF8EE'}
            ],
        },
    },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
Default.parameters = {
    backgrounds: {default: 'primary'},
}

