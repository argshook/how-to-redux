import { createMessage, createMessagesReducer } from 'utils';

export const NAME = 'counter-messages';

export const MODEL = {
  count: 0
};

export const reducer = createMessagesReducer(NAME)(MODEL);
export const message = createMessage(NAME);

export const increase = state => ({ ...state, count: state.count + 1 });
export const decrease = state => ({ ...state, count: state.count - 1 });

export const selectCount = state => state[NAME].count;
