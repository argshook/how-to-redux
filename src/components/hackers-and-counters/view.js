import React from 'react';

import Counter from '../counter-simple/view';
import HackerNewsHeadline from '../hacker-news-headline/view';

import styles from './styles.css';

export default ({
  counters,
  headlines,
  addCounter,
  removeCounter,
  addHeadline,
  increaseCounter,
  decreaseCounter
}) =>
  <div className={styles.root}>
    <div>
      { counters.map((c, id) =>
        <div key={id}>
          <Counter {...{
            count: c.model.count,
            increase: increaseCounter(c.id),
            decrease: decreaseCounter(c.id)
          }} />
          <button onClick={removeCounter(c.id)}>Remove</button>
        </div>
      ) }
    </div>

    <div>
      { headlines.map(h =>
        <div key={h.id}>
          <HackerNewsHeadline {...{
            title: h.title,
            url: h.url
          }} />
        </div>
      ) }
    </div>

    <div className={styles.controls}>
      <button onClick={addCounter}>Add counter</button>
      <button onClick={addHeadline}>Add headline</button>
    </div>
  </div>;
