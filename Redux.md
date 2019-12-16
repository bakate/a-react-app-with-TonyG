# Redux

**Redux is a predictable state container for JavaScript apps**

## Actions

**Actions** are payloads of information that send data from your app to the _store_. They are the only source of information for the _store_. You send them thanks to **store.dispatch()**

**Here is an example**

```js
const ADD_TODO = "ADD_TODO",

```

Actions are plain JavaScript objects. They must have a **type** property that indicates the type of action being performed. They should typically be defined as string constants.

```js
const redux = require('redux');
const initialState = {
  count: 5
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

const store = redux.createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
```

**Action-creator**
Their job (a function) is to return a specific action

```js
const action = {
  tpye: 'INCREMENT'
};

function increment() {
  return {
    type: 'INCREMENT'
  };
}
```

## Reducer

Their job is a function that return a **new state** absed on the incoming **action.type**. It take the previous state and action as paramaters.

## Store

the store takes one parameter, ou reducer function. All we've done previsously we've just used JS, it's by using **store** that we start using the library.

```js
const store = redux.createStore(reducer);
const store = redux.createStore(reducer);
store.subscribe(() => {
  store.getState();
});

store.dispatch(increment());
```

The dispatch call whatever inside the parenthesis. We've called the function increment for instance. It's going to check within the function reducer, the **action** will check whatever that match within the Switch function et return whatever we've declared;
