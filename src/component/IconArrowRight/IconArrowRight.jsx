import React from 'react';
import PropTypes from 'prop-types';

export const IconArrowRight = ({ width, height, color }) => {
    return (
        <svg
            className="arrowRight"
            xmlns="http://www.w3.org/2000/svg"
            width={ width }
            height={ height }
            viewBox="0 0 33 8">
            <path
                className="arrow"
                fill={ color }
                d=" M32.3536
                    4.35356C32.5488
                    4.15829 32.5488
                    3.84171 32.3536
                    3.64645L29.1716
                    0.464469C28.9763
                    0.269206 28.6597
                    0.269206 28.4645
                    0.464469C28.2692
                    0.659731 28.2692
                    0.976313 28.4645
                    1.17158L31.2929
                    4L28.4645
                    6.82843C28.2692
                    7.02369
                    28.2692
                    7.34027
                    28.4645
                    7.53554C28.6597
                    7.7308
                    28.9763
                    7.7308
                    29.1716
                    7.53554L32.3536
                    4.35356ZM-4.37114e-08
                    4.5L32
                    4.5L32
                    3.5L4.37114e-08
                    3.5L-4.37114e-08
                    4.5Z" />
        </svg>
    )
}

IconArrowRight.propType = {
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string
}

IconArrowRight.defaultProps = {
    width: 32,
    height: 8,
    color: '#000000'
}
