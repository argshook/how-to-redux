import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import axios from 'axios';

import * as Root from './components/root/redux';
import * as CounterMessages from './components/counter-messages/redux';
import * as ManyHackers from './components/many-hackers/redux';
import * as CounterSimple from './components/counter-simple/redux';
import * as HackerNewsHeadline from './components/hacker-news-headline/redux';
import * as HackersAndCounters from './components/hackers-and-counters/redux';

const reducers = {
  [Root.NAME]: Root.reducer,
  [CounterMessages.NAME]: CounterMessages.reducer,
  [ManyHackers.NAME]: ManyHackers.reducer,
  [CounterSimple.NAME]: CounterSimple.reducer,
  [HackerNewsHeadline.NAME]: HackerNewsHeadline.reducer,
  [HackersAndCounters.NAME]: HackersAndCounters.reducer
};

const middlewares = [
  applyMiddleware(ReduxThunk.withExtraArgument({ get: axios.get })),
  global.__REDUX_DEVTOOLS_EXTENSION__ && global.__REDUX_DEVTOOLS_EXTENSION__()
];

export default createStore(
  combineReducers(reducers),
  compose(...middlewares)
);
