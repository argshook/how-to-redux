import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import axios from 'axios';

import * as CounterSimple from './components/counter-simple/redux';
import { reducer as CounterMessages } from './components/counter-messages/redux';
import { reducer as HackerNewsHeadline } from './components/hacker-news-headline/redux';
import { reducer as ManyHackers } from './components/many-hackers/redux';

export default createStore(
  combineReducers({
    [CounterSimple.NAME]: CounterSimple.reducer,
    ...CounterMessages,
    ...HackerNewsHeadline,
    ...ManyHackers
  }),
  compose(
    applyMiddleware(ReduxThunk.withExtraArgument({ get: axios.get })),
    global.__REDUX_DEVTOOLS_EXTENSION__ && global.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
