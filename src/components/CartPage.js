
const items = useSelector(s => s.cart.items);
const dispatch = useDispatch();
const entries = Object.values(items);
const totalCount = entries.reduce((s, e) => s + e.qty, 0);
const totalCost = entries.reduce((s, e) => s + e.qty * e.product.price, 0);


return (
<div className="cart-page">
<h2>Shopping Cart</h2>
<p>Total items: {totalCount}</p>
<p>Total cost: ₹{totalCost}</p>


<div className="cart-list">
{entries.length === 0 && <p>Your cart is empty.</p>}
{entries.map(entry => (
<div key={entry.product.id} className="cart-row">
<img src={entry.product.thumbnail} alt="thumb" />
<div className="cart-info">
<h4>{entry.product.name}</h4>
<p>Unit: ₹{entry.product.price}</p>
<div className="qty-controls">
<button onClick={() => dispatch(decrementQty(entry.product.id))}>-</button>
<span>{entry.qty}</span>
<button onClick={() => dispatch(incrementQty(entry.product.id))}>+</button>
</div>
</div>
<div className="cart-actions">
<button onClick={() => dispatch(deleteItem(entry.product.id))}>Delete</button>
</div>
</div>
))}
</div>


<div className="cart-footer">
<button onClick={() => alert('Coming Soon')}>Checkout</button>
<button onClick={onContinue}>Continue Shopping</button>
</div>
</div>
);
}
