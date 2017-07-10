import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import './styles/main.css';
import store from './redux-store';
import Root from './components/root';

ReactDom.render(
  React.createElement(
    Provider,
    { store },
    React.createElement(Root)
  ),
  document.getElementById('root')
);
