import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { createMessagesReducer } from 'utils';

import './styles/main.css';

import Counter from './components/counter';
import { NAME, model } from './components/counter/redux';

ReactDom.render(
  React.createElement(
    Provider,
    { store: createStore(createMessagesReducer(NAME)(model)) },
    React.createElement(Counter)
  ),
  document.getElementById('root')
);
