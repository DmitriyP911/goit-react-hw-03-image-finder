import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../Styles/searchbarStyle.module.css';

export const Searchbar = ( { hanldeSearchQuery, input, handleSubmit } ) => (
    <nav>
        <form className={styles.nav} onSubmit={handleSubmit}>
            <input placeholder="Find your img..." className={styles.input} onChange={hanldeSearchQuery} type="text" name="input" value={input} />
        </form>
    </nav>
)

Searchbar.propTypes = {
    hanldeSearchQuery: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    input: PropTypes.string.isRequired
}