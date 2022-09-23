import React from 'react';
import styles from './cardtextcontent.css';

export function CardTextContent() {
    return (
        <div className={styles.textContent}>
            <div className={styles.content}>
                <h2 className={styles.title}>
                    <a className={styles.postLink} href="#">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cum, dicta eum ex maiores
                        non officiis voluptatibus. Assumenda, exercitationem, fugiat magni mollitia nam nihil odio
                        possimus quas, quod sequi voluptatum?
                    </a>
                </h2>
                <div className={styles.metaData}>
                    <div className={styles.userLink}>
                        <img className={styles.avatar}
                             src="https://cdn.dribbble.com/userupload/3581333/file/original-a7f33ef1688ed92ce5a25d664769d341.png?compress=1&resize=752x"
                             alt="avatar"
                        />
                        <a className={styles.username} href="#">
                            Testusername</a>
                    </div>
                    <span className={styles.createdAt}>Опубликовано 4 часа назад</span>
                </div>
                <div className={styles.viewDate}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#999999"
                         className="bi bi-eye-fill" viewBox="0 0 16 16">
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                        <path
                            d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                    </svg>
                    <span className={styles.date}>3 июня 2020</span>
                </div>
            </div>
        </div>
    );
}
