import React from 'react';
import { ButtonLink } from './ButtonLink';

export default {
    title: 'RouteLink',
    component: ButtonLink,
    argTypes: {
        title: { control: { type: 'text' } },
        type: {
            control: {
                type: 'select',
                options: ['light', 'dark', 'accent']
            }
        },
        withArrow: { control: { type: 'boolean' } }
    }
}



const Template = args => <ButtonLink { ...args } />;

export const Defaul = Template.bind({});
Defaul.args = {
    title: 'Узнать больше',
}

export const DarkLinkBtn = args => <ButtonLink { ...args } />;
DarkLinkBtn.args = {
    title: 'Узнать больше',
    type: 'dark',
    withArrow: true
}

export const LightBtn = args => <ButtonLink {...args } />;
LightBtn.args = {
    title: 'Узнать больше',
    type: 'light',
    withArrow: true
}