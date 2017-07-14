import { createSelectors, createMessage, createMessagesReducer } from 'utils';

export const NAME = 'hacker-news-headline';

export const MODEL = {
  isLoading: true,
  title: '',
  url: ''
};

export const reducer = ({
  [NAME]: createMessagesReducer(NAME)(MODEL)
});

export const message = createMessage(NAME);
export const selectors = createSelectors(NAME)(MODEL);

const API_ROOT = 'https://hacker-news.firebaseio.com/v0/';

// helpers
const extract = key => object => object[key];
const head = ([ head ]) => head;

export const getItemById = get => id =>
  get(`${API_ROOT}item/${id}.json`)
    .then(extract('data'));

export const getTopStoriesIds = get => () =>
  get(`${API_ROOT}topstories.json`)
    .then(extract('data'));

export const prepareHeadline = (dispatch, getState, { get }) =>
  getTopStoriesIds(get)()
    .then(head)
    .then(getItemById(get))
    .then(({ title, url }) =>
      dispatch(message(state => ({ ...state, title, url, isLoading: false })))
    )
    .catch(e => console.warn('Error occured')); // eslint-disable-line
