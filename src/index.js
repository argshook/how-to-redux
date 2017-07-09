import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import './styles/main.css';
import store from './redux-store';
import Counter from './components/counter';

ReactDom.render(
  React.createElement(
    Provider,
    { store },
    React.createElement(Counter)
  ),
  document.getElementById('root')
);
