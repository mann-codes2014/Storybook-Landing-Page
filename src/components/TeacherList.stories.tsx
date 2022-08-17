import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {TeacherList} from './TeacherList';
import {IMAGES} from "../assets";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'TeacherList',
    component: TeacherList,
    parameters: {
        backgrounds: {
            default: 'primary',
            values: [
                {name: 'light', value: '#F5F5F5'}
            ],
        },
    },
} as ComponentMeta<typeof TeacherList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TeacherList> = (args) => <TeacherList {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    teachers: [
        {
            cover: IMAGES.teacher1,
            description: 'Ut enim ad minim veniam, quis nost exercitation\n' +
                'ullamco laboris nisi ut allquip ex commodo.',
            name: 'Matthew E. McNatt',
            designation: 'Professor @George Brown College',
            course: 'Engineering physics'
        },
        {
            cover: IMAGES.teacher1,
            description: 'Ut enim ad minim veniam, quis nost exercitation\n' +
                'ullamco laboris nisi ut allquip ex commodo.',
            name: 'Matthew E. McNatt',
            designation: 'Professor @George Brown College',
            course: 'Engineering physics'
        }, {
            cover: IMAGES.teacher1,
            description: 'Ut enim ad minim veniam, quis nost exercitation\n' +
                'ullamco laboris nisi ut allquip ex commodo.',
            name: 'Matthew E. McNatt',
            designation: 'Professor @George Brown College',
            course: 'Engineering physics'
        }
    ]
};
Default.parameters = {
    backgrounds: {default: 'light'},
}

