import React from 'react';
import styles from './card.css';
import {CardTextContent} from './CardTextContent';
import {CardPreview} from './CardPreview';
import {CardMenu} from './CardMenu';
import {CardControls} from './CardControls';

export function Card() {
    return (
        <li className={styles.card}>
            <CardTextContent/>
            <CardPreview/>
            <CardMenu/>
            <CardControls/>
        </li>
    );
}
