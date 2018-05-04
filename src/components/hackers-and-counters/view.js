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
  NAME as headlineName,
  MODEL as headlineModel
} from '../hacker-news-headline/logic';

const controls = (isLoading, addComponent) =>
  <div className={styles.controls}>
    <button
      disabled={isLoading}
      onClick={addComponent(counterName)(counterModel)}
      children="Add counter"
    />

    <button
      disabled={isLoading}
      onClick={addComponent(headlineName)(headlineModel)}
      children="Add headline"
    />
  </div>;

export default ({
  components,
  addComponent,
  removeComponent,
  increaseCounter,
  decreaseCounter,
  loadHeadline,
  isLoading
}) =>
  <div className={styles.root}>
    {controls(isLoading, addComponent)}

    { Object.entries(components).map(([id, { type, model }]) =>
      <div key={id}>
        { type === counterName &&
          <Counter {...{
            ...model,
            increase: increaseCounter(id),
            decrease: decreaseCounter(id)
          }} />
        }

        { type === headlineName &&
          <Lifecycle onMount={loadHeadline(id)}>
            <HackerNewsHeadline {...model}/>
          </Lifecycle>
        }

        <button onClick={removeComponent(id)}>Remove</button>
      </div>
    ) }

    {controls(isLoading, addComponent)}
  </div>;
