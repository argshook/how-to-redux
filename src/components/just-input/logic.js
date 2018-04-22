import { createMessagesReducer, createMessage, createSelectors } from 'redux-msg';

export const NAME = 'just-input';

export const MODEL = {
  value: ''
};

export const reducer = createMessagesReducer(NAME)(MODEL);
export const message = createMessage(NAME);
export const select = createSelectors(NAME)(MODEL);

export const changeValue = value => message(state =>
  ({
    ...state,
    value
  }), 'change value');
