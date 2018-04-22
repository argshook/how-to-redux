import React from 'react';

import Counter from '../counter-simple/view';
import HackerNewsHeadline from '../hacker-news-headline/view';
import Lifecycle from '../../utils/lifecycle';

import styles from './styles.css';

import {
  NAME as counterName,
  MODEL as counterModel
} from '../counter-messages/logic';

import {
  NAME as hackerName,
  MODEL as hackersModel
} from '../hacker-news-headline/logic';

const controls = addComponent =>
  <div className={styles.controls}>
    <button onClick={addComponent(counterName)(counterModel)}>
      Add counter
    </button>

    <button onClick={addComponent(hackerName)(hackersModel)}>
      Add headline
    </button>
  </div>;

export default ({
  components,
  addComponent,
  removeComponent,
  increaseCounter,
  decreaseCounter,
  loadHeadline
}) =>
  <div className={styles.root}>
    {controls(addComponent)}

    { Object.entries(components).map(([id, { type, model }]) =>
      <div key={id}>
        { type === counterName &&
          <Counter {...{
            ...model,
            increase: increaseCounter(id),
            decrease: decreaseCounter(id)
          }} />
        }

        { type === hackerName &&
          <Lifecycle onMount={loadHeadline(id)}>
            <HackerNewsHeadline {...model}/>
          </Lifecycle>
        }

        <button onClick={removeComponent(id)}>Remove</button>
      </div>
    ) }

    {controls(addComponent)}
  </div>;
