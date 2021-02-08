import React from 'react';
import { ButtonLink } from '../../component/ButtonLink/ButtonLink';
import { Can } from './Can';

export default {
    title: 'Can',
    component: Can,
    argTypes: {
        permissions: {
            control: {
                type: 'select',
                options: ['granted', 'denied']
            }
        },
        title: { control: { type: 'text' }},
        type: {
            control: {
                type: 'select',
                options: ['light', 'dark', 'accent']
            }
        },
    }
}

const Template = args => <Can { ...args } />;

export const Granted = Template.bind({});
Granted.args = { 
    permissions: 'denied',
    title: 'some btn',
    type: 'accent'
}