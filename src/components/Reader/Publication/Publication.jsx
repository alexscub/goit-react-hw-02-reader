import React from 'react';
import styles from './Publication.module.css'

const Publications = ({ index, item }) => (<article className={styles.publication}>
    <h2>{index+1}.{item.title}</h2>
    <p>{item.text}</p>
</article>)
export default Publications;