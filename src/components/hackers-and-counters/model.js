/* global Promise */

import {
  createMessage,
  createMessagesReducer,
  createSelector
} from 'redux-msg';

import * as hackerNewsApi from '../hacker-news-headline/api';
export const NAME = 'hackers-and-counters';

export const MODEL = {
  components: {},
  headlineIds: [],
  isLoading: false
};

export const message = createMessage(NAME);
export const reducer = createMessagesReducer(NAME)(MODEL);
export const selector = createSelector(NAME)(MODEL);

export const setIsLoading = isLoading => message({ isLoading }, 'setIsLoading');

export const addComponent = type => model => message(state => {
  const id = +new Date;

  return {
    ...state,
    components: {
      ...state.components,
      [id]: { type, model }
    }
  };
}, 'addComponent');

export const removeComponent = id => message(state => {
  const { [id]: deletedKey, ...components } = state.components;

  return {
    ...state,
    components
  };
}, 'removeComponent');

export const componentAction = action => id => message(state => ({
  ...state,
  components: {
    ...state.components,
    [id]: {
      ...state.components[id],
      model: action(state.components[id].model)
    }
  }
}), 'componentAction');

export const loadHeadline = componentId => (dispatch, getState, {get}) =>
  new Promise(resolve => {
    const [ firstId, ...headlineIds ] = selector.headlineIds(getState());
    dispatch(setIsLoading(true));

    if (firstId) {
      dispatch(message({ headlineIds }, 'setHeadlineIds'));
      resolve(firstId);
    } else {
      hackerNewsApi.getTopStoriesIds(get)()
        .then(ids => {
          const [ firstId, ...headlineIds ] = ids;
          dispatch(message({ headlineIds }, 'setHeadlineIds'));
          resolve(firstId);
        });
    }
  })
    .then(headlineId => {
      hackerNewsApi.getItemById(get)(headlineId)
        .then(model =>
          dispatch(message(state =>
            ({
              ...state,
              components: {
                ...state.components,
                [componentId]: {
                  ...state.components[componentId],
                  model
                }
              }
            })
          ), 'saveLoadedHeadline')
        )
        .then(() => dispatch(setIsLoading(false)));
    });
