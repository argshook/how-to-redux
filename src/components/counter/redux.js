import { createMessage, createMessagesReducer } from 'utils';

export const NAME = 'counter';

export const model = {
  count: 0
};

export const reducer = createMessagesReducer(NAME)(model);

const message = createMessage(NAME);

export const increase = () =>
  message(state => ({ ...state, count: state.count + 1 }));

export const decrease = () =>
  message(state => ({ ...state, count: state.count - 1 }));
