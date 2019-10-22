import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls/Controls';
import Counter from './Counter/Counter';
import Publication from './Publication/Publication';
import styles from './Reader.module.css';

class Reader extends Component {
  initialState = {
    index: 0,
  };

  state = {
    ...this.initialState,
  };

  changeIndex = inc => {
    this.setState(prev => ({
      index: prev.index + inc,
    }));
  };

  handleClick = e => {
    if (e.target.name === 'next') {
      this.changeIndex(1);
    } else if (e.target.name === 'previous') {
      this.changeIndex(-1);
    }
  };

  render() {
    const { items } = this.props;
    const { index } = this.state;
    const maxIndex = items.length;
    const disabled = {};
    if (index === maxIndex - 1) {
      disabled.next = true;
    } else if (index === 0) {
      disabled.previous = true;
    }
    return (
      <div className={styles.reader}>
        <Controls disabled={disabled} handle={this.handleClick} />
        <Counter index={index} pages={maxIndex} />
        <Publication index={index} item={items[index]} />
      </div>
    );
  }
}

export default Reader;
Reader.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
