import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles.css';

const CounterMessages = ({ count, increase, decrease }) =>
  <div className={styles.root}>
    <h2>
      {count}
    </h2>

    <button className={styles.button} onClick={increase}>+</button>
    <button className={styles.button} onClick={decrease}>-</button>
  </div>;

CounterMessages.propTypes = {
  count: PropTypes.number.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired
};

export default CounterMessages;
