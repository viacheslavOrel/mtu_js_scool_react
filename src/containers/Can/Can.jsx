import React, { useState } from 'react';
import HOC from '../../component/HigherOrderComponent/HigherOrderComponent';
import { ButtonLink } from '../../component/ButtonLink/ButtonLink';

const HocComponent = HOC(ButtonLink);

export const Can = props => <HocComponent permissions={ props.permissions } { ...props } />;
