import React from 'react';
import styles from './card.css';
import {CardTextContent} from "./CardTextContent";

export function Card() {
    return (
        <li className={styles.card}>
            <div className={styles.preview}>
                <img
                    className={styles.previewImg}
                    src="https://cdn.dribbble.com/userupload/3581333/file/original-a7f33ef1688ed92ce5a25d664769d341.png?compress=1&resize=752x"
                    alt="preview"
                />
            </div>
            <CardTextContent/>
            {/*<div className={styles.menu}/>*/}
            {/*<div className={styles.controls}/>*/}
        </li>
    );
}
