import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import axios from 'axios';

import * as CounterMessages from './components/counter-messages/redux';
import * as ManyHackers from './components/many-hackers/redux';
import * as CounterSimple from './components/counter-simple/redux';
import * as HackerNewsHeadline from './components/hacker-news-headline/redux';

export default createStore(
  combineReducers({
    [CounterMessages.NAME]: CounterMessages.reducer,
    [ManyHackers.NAME]: ManyHackers.reducer,
    [CounterSimple.NAME]: CounterSimple.reducer,
    [HackerNewsHeadline.NAME]: HackerNewsHeadline.reducer
  }),
  compose(
    applyMiddleware(ReduxThunk.withExtraArgument({ get: axios.get })),
    global.__REDUX_DEVTOOLS_EXTENSION__ && global.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
