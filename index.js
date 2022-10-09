const { createStore, combineReducers } = require("redux");

// products constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

// products constants
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEM = "ADD_CART_ITEM ";

// initial state for product
const initialProductState = {
  products: ["Sugar", "salt"],
  numberOfProducts: 2,
};

// initial state for Cart
const initialCartState = {
  carts: ["Sugar"],
  numberOfCarts: 1,
};

// Product actions
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

// cart actions
const getCarts = () => {
  return {
    type: GET_CART_ITEMS,
  };
};

const addCart = (cart) => {
  return {
    type: ADD_CART_ITEM,
    payload: cart,
  };
};

// product reducer
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };

    case ADD_PRODUCT:
      return {
        numberOfProducts: state.numberOfProducts + 1,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};

// Cart Reducer
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
      };

    case ADD_CART_ITEM:
      return {
        carts: [...state.carts, action.payload],
        numberOfCarts: state.numberOfCarts + 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});

// store
const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
// store.dispatch(addProduct("Potato"));
// store.dispatch(addProduct("pen"));
store.dispatch(getCarts());
// store.dispatch(addCart("Book"));
// store.dispatch(addCart("Book"));
