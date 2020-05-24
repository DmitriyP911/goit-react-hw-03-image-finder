import React from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';
import styles from '../../Styles/imageGalleryStyles.module.css'

export const ImageGallery = ( { imgArr, openModal } ) => (
    <ul className={styles.ul}>
        {imgArr.map( ( { webformatURL, tags } ) => (
            <li className={styles.li} key={shortId.generate()}>
                <img onClick={openModal} className={styles.img} src={webformatURL} alt={tags} />
            </li>
        ) )}
    </ul>
)

ImageGallery.propTypes = {
    imgArr: PropTypes.arrayOf( PropTypes.shape( {
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired
    } ) )
}