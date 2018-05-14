```
 __  __                          __               ____               __                        _    
/\ \/\ \                        /\ \__           /\  _`\            /\ \                     /'_`\  
\ \ \_\ \    ___   __  __  __   \ \ ,_\   ___    \ \ \L\ \     __   \_\ \  __  __  __  _    /\_\/\`\
 \ \  _  \  / __`\/\ \/\ \/\ \   \ \ \/  / __`\   \ \ ,  /   /'__`\ /'_` \/\ \/\ \/\ \/'\   \/_//'/'
  \ \ \ \ \/\ \L\ \ \ \_/ \_/ \   \ \ \_/\ \L\ \   \ \ \\ \ /\  __//\ \L\ \ \ \_\ \/>  </      /\_\ 
   \ \_\ \_\ \____/\ \___x___/'    \ \__\ \____/    \ \_\ \_\ \____\ \___,_\ \____//\_/\_\     \/\_\
    \/_/\/_/\/___/  \/__//__/       \/__/\/___/      \/_/\/ /\/____/\/__,_ /\/___/ \//\/_/      \/_/
```

this repository contains a few examples of React components that use
Redux as their state manager.

in `src/components` you can find components with simple sync actions as
well as other components with more complex async actions that are
executed in predictable order.

This is not intended to be a collection of perfect examples or some
bullet proof best practices. Each application differs here and there and
so there is no one fits-all recipe.

This is intended to showcase possible ways to use redux and how flexible
it can be without being too complex or boilerplateful

---

here you can also find examples of [redux-msg](https://github.com/argshook/redux-msg).
It is a really small "library" of 6 helper functions to help organize
redux code. those functions can easily be part of your codebase, here's
one: 

```js
// createReducer : INITIAL_STATE -> Derivations -> (state, action) -> state
export default initialState => (derivations = {}) =>
  (state = initialState, action) =>
      (derivations[action.type] || (() => state))(state, action);
```

you don't need to understand everything here, just know that it turns
this:
```js
const MODEL = { property: 'old, boring value' };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'YOUR_ACTION':
      return { ...state, property: 'new value, maybe even from ' +
      action.payload }

    default:
      return state;
  }
};
```

into this:

```js
const { createReducer } from 'redux-msg';

const MODEL = { property: 'old, boring value' }

const reducer = createReducer(MODEL)({
  YOUR_ACTION: (state, action) => ({
    ...state,
    property: 'new value, maybe even from ' + action.payload
  })
})
```

this helps, cause you don't need `return`s, no `default`, no
fall-through.

---

there're many more helpful tips in `src/components` and so i encourage you to go there and explore.

start with `src/component/counter-simple` if you need to brush up on how
redux is tipically used. then continue to
`src/components/counter-messages` and see how just a few tiny functions
can reduce repetition and let you focus solely on state changes.
