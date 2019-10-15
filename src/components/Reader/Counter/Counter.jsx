import React from 'react';
import styles from './Counter.module.css'

const Counter = ({index,pages}) => (<p className={styles.counter}>{index+1}/{pages}</p>)

export default Counter;