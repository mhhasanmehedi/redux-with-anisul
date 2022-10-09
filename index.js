// state - count:0
// action - increment, decrement, restart
// reducer
// store

const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const ADD_USER = "ADD_USER";

const initialState = {
  count: 1,
  users: ["anisul"],
};

const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};

const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};

const resetAction = () => {
  return {
    type: RESET,
  };
};

const incrementCounterByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};

const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

// creating reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case RESET:
      return {
        ...state,
        count: 0,
      };
    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };

    case ADD_USER:
      return {
        count: state.count + 1,
        users: [...state.users, action.payload],
      };
    default:
      state;
  }
};

// store
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch(incrementAction());
// store.dispatch(incrementAction());
// store.dispatch(incrementAction());
// store.dispatch(decrementAction());
// store.dispatch(resetAction());
// store.dispatch(incrementAction());
// store.dispatch(resetAction());
// store.dispatch(decrementAction());
// store.dispatch(decrementAction());
// store.dispatch(decrementAction());
store.dispatch(addUser("mehedi"));
store.dispatch(addUser("Rahat"));
store.dispatch(addUser("Hasan"));
