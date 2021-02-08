import React from 'react';
import { IconArrowRight } from './IconArrowRight';

export default {
    title: 'ArrowRight',
    component: IconArrowRight,
    argTypes: { 
        color: { control: 'color' }
    }
}

const Template = args => <IconArrowRight { ...args } />;

export const Dark = Template.bind({});
Dark.args = {
    color: '#000'
}

export const Light = Template.bind({});
Light.args = {
    color: '#fff'
}