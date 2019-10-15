import React from 'react';
import styles from './Controls.module.css'
const Controls = ({ handle, disabled }) =>
    (<section className={styles.controls}>
        <button type="button" className={styles.button} name="previous" disabled={disabled.previous} onClick={handle} >Назад</button>
        <button type="button" className={styles.button} name="next" disabled={disabled.next} onClick={handle}>Вперед</button>
    </section>)

export default Controls;