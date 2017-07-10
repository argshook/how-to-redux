# Simple Redux

this folder contains simple usage of redux. There are no magic functions
or difficult concepts. This is what you would find in other redux
tutorials as a starting point.

### `index.js`

entry point of your component. since we're talking redux here, this
file `connect()`s redux store to react component and passes a slice of it
through props.

if you dont need redux, then have your component view right here in
`index.js`.

### `counter-simple.js`

here i keep only the view part, exporting a single function - a
react component.

### `redux.js`

this contains things related to redux. file could also be named `logic.js` or
whatever floats your boat.

there are at least **six** main things to maintain, listed below. (in
other examples with helper functions the number is only two: model
and actions).

for me they are like a starting point for any react component which is
to be connected to redux. Here they are:

1. `NAME` is like a unique identifier for your component. Its used in
   action types, selectors (more on them in other examples) as well as a
   name for reducer in `create-store.js`.

1. `MODEL` is an object that contains initial state. you can call it
   like that - `INITIAL_STATE` though i find `MODEL` simply shorter.
   Actually, not only we have initial state but also outline the
   component model. This should contain everything that is possible to
   add/edit through actions. You look at `MODEL` and you know what's
   inside the component. In this case it's only one property `count`.

1. action types. here i have two action types both of which are
   "namespaced" (etc. `${NAME}/INCREASE`). You can already see there's
   some repetition, action type might seem not needed at all. with
   slightly different pattern you dont need action types, more on this
   in other examples.

1. actions. these are function that simply create an object to be used
   for `dispatch`. objects must contain `type` property, as required by
   redux. but wait, in this example `increase` & `decrease` aren't
   function, they're objects! what the hell?

   well, i could have written this:
   `export const increase = () => ({ type: INCREASE });`
   but why do i need a function if i never pass an argument? this is
   just shorter and does not lose any meaning:
   `export const increase = ({ type: INCREASE });`

1. reducer. this is just a classic redux reducer function. A simple
   switch case that you can find in any resource about redux.

## What's wrong with this?

as usual - it depends. if your component is simple and has just a few
actions, there's nothing wrong with it.

however, any action requires action type, action function (or object),
probably a selector (more on them in other examples) and something
in reducer to take care of it. adding new action or editing an
existing one gets tedious when you need to edit so many locations.

## How to solve it?

let's find the essence of those two `increase` & `decrease` actions.
all they do is `state.count + 1` & `state.count - 1`. how can we write
this logic with less things around and only focus on state changes? Take
a look at `counter-messages` example to find the answer.
