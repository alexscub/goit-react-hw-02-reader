import React from 'react';
import PropTypes from 'prop-types';
import styles from './Publication.module.css';

const Publications = ({ index, item }) => (
  <article className={styles.publication}>
    <h2>
      {index + 1}.{item.title}
    </h2>
    <p>{item.text}</p>
  </article>
);
export default Publications;
Publications.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
