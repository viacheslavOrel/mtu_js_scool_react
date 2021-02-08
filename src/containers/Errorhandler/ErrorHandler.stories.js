import React from 'react';
import { ErrorHandler } from './ErrorHandler';
import { ErrorComponent } from '../../component/ErrorComponent/ErrorComponent';

export default {
    title: 'ErrorHandler',
    component: ErrorHandler,
}

const Template = props => (
    <ErrorHandler>
        <ErrorComponent { ...props } />
    </ErrorHandler>
);


export const WithError = Template.bind({});