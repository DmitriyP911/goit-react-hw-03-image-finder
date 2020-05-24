import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../Styles/buttonStyles.module.css';

export const Button = ( { loadMore } ) => (
    <div className={styles.btnWrap}>
        <button className={styles.btn} type="button" onClick={loadMore}>Load More</button>
    </div>
)

Button.propTypes = {
    loadMore: PropTypes.func.isRequired,
}