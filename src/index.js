import { createElement } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './styles/main.css';
import store from './store';
import Root from './components/root';

render(
  createElement(Provider, { store }, createElement(Root)),
  document.getElementById('root')
);
