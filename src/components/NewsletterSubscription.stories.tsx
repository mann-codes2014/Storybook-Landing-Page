import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {NewsletterSubscription} from './NewsletterSubscription';
import {IMAGES} from "../assets";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'NewsletterSubscription',
    component: NewsletterSubscription,
    parameters: {
        backgrounds: {
            default: 'primary',
            values: [
                {name: 'light', value: '#F5F5F5'}
            ],
        },
    },
} as ComponentMeta<typeof NewsletterSubscription>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NewsletterSubscription> = (args) => <NewsletterSubscription {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
Default.parameters = {
    backgrounds: {default: 'light'},
}

