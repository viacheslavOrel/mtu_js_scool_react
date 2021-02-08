import React from 'react';
import PropTypes from 'prop-types';
import { IconArrowRight } from '../IconArrowRight/IconArrowRight'
import style from './ButtonLink.module.css';

export const ButtonLink = ({ title, type, withArrow }) => {
    const arrow = <div className={ style.arrow }>{type === 'dark' ? <IconArrowRight color="#000" /> : <IconArrowRight color="#fff" />}</div>;

    return (
        <button 
            type="button"
            className={ `${style.button} ${style[type]}`}>
                <p className={ style.title }>{ title }</p>
                { withArrow && arrow }
        </button>
    )
}

ButtonLink.propType = {
    title: PropTypes.string,
    type: PropTypes.oneOf(['light', 'dark', 'accent']),
    whisArrow: PropTypes.bool,
}

ButtonLink.defaultProps = {
    title: 'button',
    type: 'dark',
    withArrow: false,
}
