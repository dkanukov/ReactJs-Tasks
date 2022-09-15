import React from 'react';
import styles from './card.css';
import {CardTextContent} from "./CardTextContent";

export function Card() {
  return (
    <li className={styles.card}>
        <CardTextContent/>
        {/*<div className={styles.menu}/>*/}
        {/*<div className={styles.controls}/>*/}
    </li>
  );
}
