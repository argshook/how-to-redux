const API_ROOT = 'https://hacker-news.firebaseio.com/v0/';

const extract = key => object => object[key];

export const getItemById = get => id =>
  get(`${API_ROOT}item/${id}.json`)
    .then(extract('data'));

export const getTopStoriesIds = get => () =>
  get(`${API_ROOT}topstories.json`)
    .then(extract('data'));
