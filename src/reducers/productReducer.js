import PRODUCTS from 'src/data/products.js';

const initialState = {
  items: PRODUCTS
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}


