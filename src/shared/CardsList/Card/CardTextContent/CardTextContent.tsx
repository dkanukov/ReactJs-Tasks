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
            </div>
        </div>
    );
}
