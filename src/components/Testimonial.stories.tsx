import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Testimonial} from './Testimonial';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Testimonial',
    component: Testimonial,
    parameters: {
        backgrounds: {
            default: 'primary',
            values: [
                {name: 'light', value: '#F5F5F5'}
            ],
        },
    },
} as ComponentMeta<typeof Testimonial>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Testimonial> = (args) => <Testimonial {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    avatar: 'https://avatars.githubusercontent.com/u/97145056?v=4',
    name: 'Abdur Rehman',
    role: 'React Engineer',
    message: 'Teachings of the great explore of truth, \n' +
        'the master-builder of human happiness. \n' +
        'no one rejects,dislikes, or avoids pleasure \n' +
        'itself, pleasure itself'
};
Default.parameters = {
    backgrounds: {default: 'light'},
}

