import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import axios from 'axios';

import * as Root from './components/root/logic';
import * as CounterMessages from './components/counter-messages/logic';
import * as ManyHackers from './components/many-hackers/logic';
import * as CounterSimple from './components/counter-simple/logic';
import * as HackerNewsHeadline from './components/hacker-news-headline/logic';
import * as HackersAndCounters from './components/hackers-and-counters/logic';

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
