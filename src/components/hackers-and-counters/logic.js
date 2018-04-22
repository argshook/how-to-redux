import { createMessage, createMessagesReducer, createSelectors } from 'redux-msg';

import * as hackerNewsApi from '../hacker-news-headline/api';
export const NAME = 'hackers-and-counters';

export const MODEL = {
  components: {},
  headlineIds: []
};

export const message = createMessage(NAME);
export const reducer = createMessagesReducer(NAME)(MODEL);
export const selectors = createSelectors(NAME)(MODEL);

export const addComponent = type => model => message(state => {
  const id = +new Date;

  return {
    ...state,
    components: {
      ...state.components,
      [id]: { type, model }
    }
  };
});

export const removeComponent = id => message(state => {
  const { [id]: deletedKey, ...components } = state.components;

  return {
    ...state,
    components
  };
});

export const componentAction = action => id => message(state => ({
  ...state,
  components: {
    ...state.components,
    [id]: {
      ...state.components[id],
      model: action(state.components[id].model)
    }
  }
}));

export const loadHeadline = componentId => (dispatch, getState, {get}) =>
  new Promise(resolve => {
    const [ firstId, ...headlineIds ] = selectors.headlineIds(getState());

    if (firstId) {
      dispatch(message(state => ({ ...state, headlineIds })));
      resolve(firstId);
    } else {
      hackerNewsApi.getTopStoriesIds(get)()
        .then(ids => {
          const [ firstId, ...headlineIds ] = ids;
          dispatch(message(state => ({ ...state, headlineIds })));
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
          ))
        );
    });
