

```javascript
export const addToCart = (product) => ({ type: 'ADD_TO_CART', payload: { product } });
export const incrementQty = (id) => ({ type: 'INCREMENT_QTY', payload: { id } });
export const decrementQty = (id) => ({ type: 'DECREMENT_QTY', payload: { id } });
export const deleteItem = (id) => ({ type: 'DELETE_ITEM', payload: { id } });
```


---
