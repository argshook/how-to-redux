import React from 'react';

import styles from './styles.css';

export default ({ count, increase, decrease }) =>
  <div className={styles.root}>
    <h2>
      {count}
    </h2>

    <button className={styles.button} onClick={increase}>+</button>
    <button className={styles.button} onClick={decrease}>-</button>
  </div>;
