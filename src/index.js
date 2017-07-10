import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import './styles/main.css';
import store from './redux-store';
import Counters from './components/counters';

ReactDom.render(
  React.createElement(
    Provider,
    { store },
    React.createElement(Counters)
  ),
  document.getElementById('root')
);
