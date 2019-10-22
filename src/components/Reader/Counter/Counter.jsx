import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ index, pages }) => (
  <p className={styles.counter}>
    {index + 1}/{pages}
  </p>
);

export default Counter;

Counter.propTypes = {
  index: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
};
