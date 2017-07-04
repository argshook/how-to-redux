import React from 'react';
import ReactDom from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

import './styles/main.css';

import styles from './styles/root-component.css';

const model = {
  count: 0
};

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const reducer = (state = model, action) => (({
  [INCREASE]: s => ({ ...s, count: s.count + 1 }),
  [DECREASE]: s => ({ ...s, count: s.count - 1 }),
})[action.type] || (() => state))(state, action);

const store = createStore(reducer, model);

const Root = ({ count, increase, decrease }) =>
  <div className={styles.root}>
    <h2>
      {count}
    </h2>

    <button className={styles.button} onClick={increase}>+</button>
    <button className={styles.button} onClick={decrease}>-</button>
  </div>;

const mapDispatchToProps = dispatch => ({
  increase: () => dispatch({ type: INCREASE }),
  decrease: () => dispatch({ type: DECREASE })
});

const ConnectedRoot = connect(i => i, mapDispatchToProps)(Root);

ReactDom.render(
  <Provider store={store}>
    <ConnectedRoot/>
  </Provider>,
  document.getElementById('root')
);
