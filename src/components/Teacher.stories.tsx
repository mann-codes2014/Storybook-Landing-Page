import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Teacher} from './Teacher';
import {IMAGES} from "../assets";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Teacher',
    component: Teacher,
    parameters: {
        backgrounds: {
            default: 'primary',
            values: [
                {name: 'light', value: '#F5F5F5'}
            ],
        },
    },
} as ComponentMeta<typeof Teacher>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Teacher> = (args) => <Teacher {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    cover: IMAGES.teacher1,
    description: 'Ut enim ad minim veniam, quis nost exercitation\n' +
        'ullamco laboris nisi ut allquip ex commodo.',
    name: 'Matthew E. McNatt',
    designation: 'Professor @George Brown College',
    course:'Engineering physics'
};
Default.parameters = {
    backgrounds: {default: 'light'},
}

