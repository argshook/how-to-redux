import { createMessage, createMessagesReducer, createSelectors } from 'redux-msg';

import { MODEL as counterModel } from '../counter-simple/logic';

export const NAME = 'hackers-and-counters';

export const COUNTER = 'counter';

export const MODEL = {
  counters: []
};

export const message = createMessage(NAME);
export const reducer = createMessagesReducer(NAME)(MODEL);
export const selectors = {
  ...createSelectors(NAME)(MODEL)
};

const newCounter = id => ({
  id,
  type: COUNTER,
  model: counterModel
});

export const addCounter = () => message(state => ({
  ...state,
  counters: state.counters.concat(newCounter(+new Date))
}));

export const removeCounter = id => message(state => ({
  ...state,
  counters: state.counters.filter(counter => counter.id !== id)
}));

export const counterAction = action => id => message(state => ({
  ...state,
  counters: state.counters.map(counter => counter.id === id ?
    { ...counter, model: action(counter.model) } :
    counter
  )
}));
