import { createStore, combineReducers } from 'redux';

import * as CounterSimple from './components/counter-simple/redux';
import { reducer as CounterMessages } from './components/counter-messages/redux';

export default createStore(
  combineReducers({
    [CounterSimple.NAME]: CounterSimple.reducer,
    ...CounterMessages
  }),
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
