import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {TestimonialSlider} from './TestimonialSlider';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'TestimonialSlider',
    component: TestimonialSlider,
    parameters: {
        backgrounds: {
            default: 'primary',
            values: [
                {name: 'light', value: '#F5F5F5'}
            ],
        },
    },
} as ComponentMeta<typeof TestimonialSlider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TestimonialSlider> = (args) => <TestimonialSlider {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    testimonials: [{
        avatar: 'https://avatars.githubusercontent.com/u/97145056?v=4',
        name: 'Danish Alam',
        role: 'Full Stack Engineer',
        message: 'Teachings of the great explore of truth, \n' +
            'the master-builder of human happiness. \n' +
            'no one rejects,dislikes, or avoids pleasure \n' +
            'itself, pleasure itself'
    }, {
        avatar: 'https://avatars.githubusercontent.com/u/97145056?v=4',
        name: 'Abdur Rehman',
        role: 'Full Stack Engineer',
        message: 'Teachings of the great explore of truth, \n' +
            'the master-builder of human happiness. \n' +
            'no one rejects,dislikes, or avoids pleasure \n' +
            'itself, pleasure itself'
    }, {
        avatar: 'https://avatars.githubusercontent.com/u/97145056?v=4',
        name: 'Muhammad Usman',
        role: 'Full Stack Engineer',
        message: 'Teachings of the great explore of truth, \n' +
            'the master-builder of human happiness. \n' +
            'no one rejects,dislikes, or avoids pleasure \n' +
            'itself, pleasure itself'
    },
        {
            avatar: 'https://avatars.githubusercontent.com/u/97145056?v=4',
            name: 'Ishtiaq Ismail',
            role: 'Government Officer',
            message: 'Teachings of the great explore of truth, \n' +
                'the master-builder of human happiness. \n' +
                'no one rejects,dislikes, or avoids pleasure \n' +
                'itself, pleasure itself'
        }, {
            avatar: 'https://avatars.githubusercontent.com/u/97145056?v=4',
            name: 'Raja Ammad',
            role: 'Data Scientist',
            message: 'Teachings of the great explore of truth, \n' +
                'the master-builder of human happiness. \n' +
                'no one rejects,dislikes, or avoids pleasure \n' +
                'itself, pleasure itself'
        }]
};
Default.parameters = {
    backgrounds: {default: 'light'},
}

