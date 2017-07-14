import { createMessage, createMessagesReducer, createSelectors } from 'utils';

import { getTopStoriesIds, getItemById } from '../hacker-news-headline/redux';

export const NAME = 'many-hackers';

export const MODEL = {
  ids: [],
  headlines: [],
  isLoading: true
};

export const message = createMessage(NAME);
export const selectors = {
  ...createSelectors(NAME)(MODEL),
  nextId: state => new Promise((resolve, reject) => {
    const next = state[NAME].ids[0];
    return next ? resolve(next) : reject();
  })
};

export const reducer = {
  [NAME]: createMessagesReducer(NAME)(MODEL)
};

export const prepareHeadlines = (dispatch, getState, { get }) =>
  getTopStoriesIds(get)()
    .then(ids =>
      [ message(state => ({ ...state, ids })),
        getNext
      ].map(dispatch));

const tail = ([ , ...tail ]) => tail;
export const getNext = (dispatch, getState, { get }) =>
  Promise.resolve(dispatch(message(state => ({ ...state, isLoading: true }))))
    .then(() => selectors.nextId(getState()))
    .then(getItemById(get))
    .then(item => {
      dispatch(message(state =>
        ({ ...state,
          headlines: state.headlines.concat(item),
          ids: tail(state.ids),
          isLoading: false
        }))
      )
    });
