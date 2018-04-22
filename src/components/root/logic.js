import { createMessagesReducer, createMessage, createSelectors } from 'redux-msg';

export const NAME = 'root';

export const ACTIVE_TAB = {
  SIMPLE_COUNTER: 'SIMPLE_COUNTER',
  MESSAGES_COUNTER: 'MESSAGES_COUNTER',
  ASYNC_WITH_MESSAGES: 'ASYNC_WITH_MESSAGES',
  LIST_OF_HEALDINES: 'LIST_OF_HEALDINES',
  HEADLINES_AND_COUNTERS: 'HEADLINES_AND_COUNTERS',
  JUST_INPUT: 'JUST_INPUT'
};

export const MODEL = {
  activeTab: ACTIVE_TAB.HEADLINES_AND_COUNTERS
};

export const reducer = createMessagesReducer(NAME)(MODEL);
export const selectors = createSelectors(NAME)(MODEL);
export const message = createMessage(NAME);

export const switchTab = activeTab => state => ({ ...state, activeTab });
