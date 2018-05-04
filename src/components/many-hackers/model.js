/* global Promise */
import {
  createMessage,
  createMessagesReducer,
  createSelector
} from 'redux-msg';

import { maybe, tail } from 'utils';

import { getTopStoriesIds, getItemById } from '../hacker-news-headline/api';

export const NAME = 'many-hackers';

export const MODEL = {
  ids: [],
  headlines: [],
  isLoading: true
};

export const message = createMessage(NAME);
export const reducer = createMessagesReducer(NAME)(MODEL);

export const selector = {
  ...createSelector(NAME)(MODEL),
  nextId: state => maybe(() => state[NAME].ids[0])
};

export const addNextItem = item =>
  state => ({
    ...state,
    headlines: state.headlines.concat(item),
    ids: tail(state.ids)
  });

export const prepareHeadlines = (dispatch, getState, { get }) =>
  Promise.resolve(selector.nextId(getState()))
    .catch(() =>
      getTopStoriesIds(get)()
        .then(ids =>
          [ message({ ids }),
            getNext
          ].map(dispatch))
    );


export const getNext = (dispatch, getState, { get }) =>
  Promise.resolve(dispatch(message({isLoading: true})))
    .then(() => selector.nextId(getState()))
    .catch(() => {
      dispatch(prepareHeadlines);
      return Promise.reject('retry');
    })
    .then(getItemById(get))
    .then(item => dispatch(message(addNextItem(item))))
    .catch(e => e !== 'retry' && console.log(e))
    .then(() => dispatch(message({isLoading: false})));
