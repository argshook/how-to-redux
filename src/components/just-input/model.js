import { createMessagesReducer, createMessage, createSelector } from 'redux-msg';

export const NAME = 'just-input';

export const MODEL = {
  value: ''
};

export const reducer = createMessagesReducer(NAME)(MODEL);
export const message = createMessage(NAME);
export const select = createSelector(NAME)(MODEL);

export const changeValue = value => message({ value }, 'change value');
