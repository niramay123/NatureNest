
export default function cartReducer(state = initialState, action) {
const { type, payload } = action;
switch (type) {
case 'ADD_TO_CART': {
const { product } = payload;
if (state.items[product.id]) return state; // button should be disabled client-side but guard here
return {
...state,
items: {
...state.items,
[product.id]: { product, qty: 1 }
}
};
}
case 'INCREMENT_QTY': {
const id = payload.id;
if (!state.items[id]) return state;
return {
...state,
items: {
...state.items,
[id]: { ...state.items[id], qty: state.items[id].qty + 1 }
}
};
}
case 'DECREMENT_QTY': {
const id = payload.id;
if (!state.items[id]) return state;
const newQty = state.items[id].qty - 1;
if (newQty <= 0) {
const { [id]: removed, ...rest } = state.items;
return { ...state, items: rest };
}
return {
...state,
items: {
...state.items,
[id]: { ...state.items[id], qty: newQty }
}
};
}
case 'DELETE_ITEM': {
const id = payload.id;
const { [id]: removed, ...rest } = state.items;
return { ...state, items: rest };
}
default:
return state;
}
}

