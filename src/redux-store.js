import { createStore } from 'redux';

import { reducer } from './components/counter/redux';

export default createStore(reducer);
