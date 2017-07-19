import { createSelectors, createMessage, createMessagesReducer } from 'utils';

import { getItemById, getTopStoriesIds } from './api';

export const NAME = 'hacker-news-headline';

export const MODEL = {
  isLoading: true,
  title: '',
  url: ''
};

export const reducer = createMessagesReducer(NAME)(MODEL);
export const message = createMessage(NAME);
export const selectors = createSelectors(NAME)(MODEL);

// helpers
const head = ([ head ]) => head;

export const prepareHeadline = (dispatch, getState, { get }) =>
  getTopStoriesIds(get)()
    .then(head)
    .then(getItemById(get))
    .then(({ title, url }) =>
      dispatch(message(state => ({ ...state, title, url, isLoading: false })))
    )
    .catch(e => console.warn('Error occured')); // eslint-disable-line
