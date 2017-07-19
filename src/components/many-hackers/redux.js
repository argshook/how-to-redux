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
export const selectors = {
  ...createSelectors(NAME)(MODEL),
  nextId: state => maybe(() => state[NAME].ids[0])
};

export const reducer = createMessagesReducer(NAME)(MODEL);

export const prepareHeadlines = (dispatch, getState, { get }) =>
  getTopStoriesIds(get)()
    .then(ids =>
      [ message(state => ({ ...state, ids })),
        getNext
      ].map(dispatch));

export const getNext = (dispatch, getState, { get }) =>
  Promise.resolve(dispatch(message(state => ({ ...state, isLoading: true }))))
    .then(() => selectors.nextId(getState()))
    .then(getItemById(get))
    .then(item =>
      dispatch(message(state =>
        ({ ...state,
          headlines: state.headlines.concat(item),
          ids: tail(state.ids),
          isLoading: false
        }))
      ))
    .catch(e => console.log('Something bad happened :(', e));
