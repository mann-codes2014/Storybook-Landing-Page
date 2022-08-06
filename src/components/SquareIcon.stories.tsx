import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {SquareIcon} from './SquareIcon';
import {ReactComponent as ExamSVG} from '../assets/icons/exam.svg';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'SquareIcon',
    component: SquareIcon,
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
} as ComponentMeta<typeof SquareIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SquareIcon> = (args) => <SquareIcon {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    children: <ExamSVG/>,
    backgroundColor: '#FFFFFF33'
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    children: <ExamSVG/>,
    backgroundColor: '#4D2C5E'
};
Primary.parameters = {
    backgrounds: {default: 'light'},
}