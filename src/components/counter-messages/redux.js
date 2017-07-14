import { createMessage, createMessagesReducer } from 'utils';

export const NAME = 'counter-messages';

export const model = {
  count: 0
};

export const reducer = ({
  [NAME]: createMessagesReducer(NAME)(model)
});

export const message = createMessage(NAME);

export const increase = message(state => ({ ...state, count: state.count + 1 }));
export const decrease = message(state => ({ ...state, count: state.count - 1 }));

export const selectCount = state => state[NAME].count;
