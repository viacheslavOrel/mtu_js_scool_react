import React from 'react';

export default WrappedComponent => props =>
    props.permissions === 'granted'
        ? <WrappedComponent {...props} />
        : <p>Access denied</p>;
