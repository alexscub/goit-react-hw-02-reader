import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ handle, currentPage, pages }) => (
  <section className={styles.controls}>
    <button
      type="button"
      className={styles.button}
      name="previous"
      disabled={!currentPage}
      onClick={handle}
    >
      Назад
    </button>
    <button
      type="button"
      className={styles.button}
      name="next"
      disabled={currentPage + 1 === pages}
      onClick={handle}
    >
      Вперед
    </button>
  </section>
);

export default Controls;
Controls.propTypes = {
  handle: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
};
