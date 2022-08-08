import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Track} from './Track';
import {IMAGES} from "../assets";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Track',
    component: Track,
    parameters: {
        backgrounds: {
            default: 'primary',
            values: [
                {name: 'light', value: '#F5F5F5'}
            ],
        },
    },
} as ComponentMeta<typeof Track>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Track> = (args) => <Track {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    cover: IMAGES.track,
    category: 'UI/UX Design',
    rating: 4,
    title: 'UI/UX Design for Beginners',
    price: '$98',
    duration: '22hr 30min',
    numberOfSales: '34 Courses',
    numberOfCourses: '250 Sales',
};
Default.parameters = {
    backgrounds: {default: 'light'},
}

