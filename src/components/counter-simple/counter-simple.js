import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles.css';

const Counter = ({ count, increase, decrease }) =>
  <div className={styles.root}>
    {count}

    <button className={styles.button} onClick={increase}>+</button>
    <button className={styles.button} onClick={decrease}>-</button>
  </div>;

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired
};

export default Counter;
