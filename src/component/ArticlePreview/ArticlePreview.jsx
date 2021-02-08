import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { ButtonLink } from '../ButtonLink/ButtonLink'
import style from './ArticlePreview.module.css'

export const ArticlePreview = ({ title, content, img, link, orientation })  => {

    return (
        <div className={ `${ style.container } ${style[orientation]}` }>
            <h2 className={ style.header }>{ title }</h2>
            <div className={ style.descriptionContainer }>
                { content.map(item => <p className={ style.text }>{ item }</p>) }
                <Link to={ link }>
                    <ButtonLink title={ "Узнать больше" } withArrow={ true } />
                </Link>
            </div>
            <img className={ style.preview } src={ img.path } alt={ img.name } />
        </div>
    )
}

ArticlePreview.propType = {
    title: PropTypes.string,
    content: PropTypes.array,
    img: PropTypes.object,
    link: PropTypes.string,
    orientation: PropTypes.oneOf(['previewLeft', 'previewRight'])
}

ArticlePreview.defaultProps = {
    title: 'Title',
    content: [ 'description' ],
    img: {
        path: '',
        name: 'empty'
    },
    link: '#',
    orientation: 'previewLeft'
}
