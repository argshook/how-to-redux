import head from '../../utils/head';
import { createSelector, createMessage, createMessagesReducer } from 'redux-msg';

import { getItemById, getTopStoriesIds } from './api';

export const NAME = 'hacker-news-headline';

export const MODEL = {
  isLoading: true,
  title: '',
  url: ''
};

export const reducer = createMessagesReducer(NAME)(MODEL);
export const message = createMessage(NAME);
export const selector = createSelector(NAME)(MODEL);

export const prepareHeadline = (dispatch, getState, { get }) =>
  getTopStoriesIds(get)()
    .then(head)
    .then(getItemById(get))
    .then(({ title, url = '' }) =>
      dispatch(message({ title, url, isLoading: false }, 'prepareHeadline'))
    )
    .catch(e => console.warn('Error occured')); // eslint-disable-line
