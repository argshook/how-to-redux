import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import axios from 'axios';

import * as Root from './components/root/model';
import * as CounterMessages from './components/counter-messages/model';
import * as ManyHackers from './components/many-hackers/model';
import * as CounterSimple from './components/counter-simple/model';
import * as HackerNewsHeadline from './components/hacker-news-headline/model';
import * as HackersAndCounters from './components/hackers-and-counters/model';
import * as JustInput from './components/just-input/model';

const reducers = {
  [Root.NAME]: Root.reducer,
  [CounterMessages.NAME]: CounterMessages.reducer,
  [ManyHackers.NAME]: ManyHackers.reducer,
  [CounterSimple.NAME]: CounterSimple.reducer,
  [HackerNewsHeadline.NAME]: HackerNewsHeadline.reducer,
  [HackersAndCounters.NAME]: HackersAndCounters.reducer,
  [JustInput.NAME]: JustInput.reducer
};

const store = createStore(
  combineReducers(reducers),
  compose(
    applyMiddleware(ReduxThunk.withExtraArgument({ get: axios.get })),
    global.__REDUX_DEVTOOLS_EXTENSION__ && global.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
