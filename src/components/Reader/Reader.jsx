import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls/Controls';
import Counter from './Counter/Counter';
import Publication from './Publication/Publication';
import styles from './Reader.module.css';

class Reader extends Component {
  initialState = {
    currentPage: 0,
  };

  state = {
    ...this.initialState,
  };

  handleClick = e => {
    e.persist();
    this.setState(prev => ({
      currentPage:
        e.target.name === 'next' ? prev.currentPage + 1 : prev.currentPage - 1,
    }));
  };

  render() {
    const { items } = this.props;
    const { currentPage } = this.state;
    const currentPageNum = currentPage + 1;
    const pages = items.length;
    return (
      <div className={styles.reader}>
        <Controls
          currentPage={currentPage}
          pages={pages}
          handle={this.handleClick}
        />
        <Counter currentPage={currentPageNum} pages={pages} />
        <Publication currentPage={currentPageNum} item={items[currentPage]} />
      </div>
    );
  }
}

export default Reader;
Reader.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
