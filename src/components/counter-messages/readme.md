# "Advanced" Redux

after working with a number of redux applications i got tired of
repeating same things over and over again. maintenance can very quickly
turn into nightmare and each new feature feels like copy pasting.

---

when you click a button you want something to happen, say, display some
text.

in other words: when event happens, state should change

or in code: when `dispatch({ type: 'name-of-action' })` then `state = {
...previousState, property: 'hey i was not here before!' }`

this is the essence. unfortunately, the essence usually requires all
sorts of metadata to be dragged around.

below is example of what's usually done. it has great flexibility
but a lot of repetition:

```js
const ACTION_TYPE = 'hello im a name of some action :)'
const ACTION = payload => ({ type: ACTION_TYPE, payload });
const initialState = {
  justAProperty: ''
}

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ACTION_TYPE:
      return { ...state,  someProperty: payload }

    default:
      return state;
  }
}
```

all of the above really is just `{ ...oldState, ...newState }`. wouldn't
it be great to do only that and nothing else?

yes, yes it would. let's see how.

---

`redux-msg` has 6 helper functions, 2 of which are used in
`counter-messages` example: `createMessage` & `createMessagesReducer`.

combine this with a convention of always having a `NAME` (string) and a
`MODEL` (object) and you have all building blocks for easily dancing
around state changes without boilerplate

---

`createMessage` is a function which, given a string, returns another
function - action creator. In the end it's a good old redux action.

```js
const NAME = 'hey-im-a-component-name-i-may-be-a-part-of-redux-store';
const message = createMessage(NAME)
```

once you have that, you can define actions like so:

```js
const myAction = message({ someProperty: 'hey how ya doing' });

// or, if you need current state, pass a function:

const myActionWithState = message(state => {
  ...state,
  someProperty: 'hey im new here, hello'
})
```

this is fun to work with, since in React component you can simply
`dispatch(message({ someProperty: 'ooh im going to the state!' }))`

---

`message` wouldn't work without a specific reducer that could handle it.
This is what `createMessagesReducer` is for.

Don't worry, it's also pretty simple. best part - you don't need to know
what happens inside, unless you really want to. what's important is that
`createMessagesReducer` returns a function of signature `(state, action) => state` which is just a normal reducer we are all used to. 
Let's see how it's used:

```js
const NAME = 'the-best-name-ever';
const MODEL = {
  all: 1,
  the: 2,
  things: 3
};

const reducer = createMessagesReducer(NAME)(MODEL);
```

---

now, let's look how all of what i typed above fits together and how it
helps us.

in order to have a component display something, you also need
a `view.js`, a.k.a some divs:

```js
import React from 'react';
export default ({ number, onClick }) =>
  <button onClick={onClick}>
    The number is {number}, click me to increase it!
  </button>;
```

let's define `model.js`:

```js
import { createMessage, createMessagesReducer } from 'redux-msg'

export const NAME = 'i-can-even-be-a-guid'
export const MODEL = {
  number: 0
};

export const messsage = createMessage(NAME);
export const reducer = createMessagesReducer(NAME)(MODEL);

export const increaseNumber = message(state => ({
  ...state,
  number: state.number + 1
}));
```

great, now let's connect our `model.js` with `view.js` in `index.js`:

```js
import { connect } from 'react-redux';
import view from './view';
import { increaseNumber } from './model'

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(increaseNumber)
});

const mapStateToProps = state => ({
  number: state.number
});

export default connect(mapStateToProps, mapDispatchToProps)(view);
```

---

one last part of connecting everything is `createStore` thing. It's the
usual thing you would do in redux, however, following `NAME` convention
makes things much clearer:

```js
import { createStore, combineReducers } from 'redux';

import * as OurModel from './src/components/our-component-from-above/model';

export default () => createStore(combineReducers({
  [OurModel.NAME]: OurModel.reducer
}));
```

here i defined a function which you would give to `Provider`. I wont get
into details of that as it is no different from usual usage and `redux-msg` does no magic with it.

---

i promised to show how everything connects and how is it helpful. Let's
talk about helpful part.

you should notice immediatelly that `model.js` is much less of redux
than it would be by default. No action types, no action creators, no verbose reducers. Imagine
you have an application composed of, say, 10 components each of which
has 10 actions. If each action is 3 things (action type, action creator, reducer), you end up with 300 things.
wait what?

with this approach each action is only one thing (`message`) and so you would end up 100. everything suddenly progresses
linearly which is lovely for maintenance.

---

for more advanced uses of `message` (async n stuff) look at `hacker-news-headline`, `hackers-and-counters` (composing models), `many-hackers`.
