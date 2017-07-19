/* global Promise */
import {
  createMessage,
  createMessagesReducer,
  createSelectors,
  maybe,
  tail
} from 'utils';

import { getTopStoriesIds, getItemById } from '../hacker-news-headline/api';

export const NAME = 'many-hackers';

export const MODEL = {
  ids: [],
  headlines: [],
  isLoading: true
};

export const message = createMessage(NAME);
export const reducer = createMessagesReducer(NAME)(MODEL);

export const selectors = {
  ...createSelectors(NAME)(MODEL),
  nextId: state => maybe(() => state[NAME].ids[0])
};

export const setIsLoading = isLoading =>
  message(state => ({
    ...state,
    isLoading
  }));

export const addNextItem = item =>
  message(state => ({
    ...state,
    headlines: state.headlines.concat(item),
    ids: tail(state.ids)
  }));

export const prepareHeadlines = (dispatch, getState, { get }) =>
  getTopStoriesIds(get)()
    .then(ids =>
      [ message(state => ({ ...state, ids })),
        getNext
      ].map(dispatch));

export const getNext = (dispatch, getState, { get }) =>
  Promise.resolve(dispatch(setIsLoading(true)))
    .then(() => selectors.nextId(getState()))
    .then(getItemById(get))
    .then(item => dispatch(addNextItem(item)))
    .catch(e => console.log('Something bad happened :(', e))
    .then(() => dispatch(setIsLoading(false)));
