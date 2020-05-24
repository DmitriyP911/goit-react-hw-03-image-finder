import React from 'react';
import styles from '../../Styles/loaderStyles.module.css';

export const Loader = () => (
    <div className={styles.loader}>
        <h1 className={styles.title}>Loading...</h1>
        <div className={styles.l_main}>
            <div className={styles.l_square}><span></span><span></span><span></span></div>
            <div className={styles.l_square}><span></span><span></span><span></span></div>
            <div className={styles.l_square}><span></span><span></span><span></span></div>
            <div className={styles.l_square}><span></span><span></span><span></span></div>
        </div>
    </div>
)