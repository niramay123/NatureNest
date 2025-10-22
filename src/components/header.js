```javascript
import React from 'react';
import { useSelector } from 'react-redux';


export default function Header({ onNavigate }) {
const items = useSelector((state) => state.cart.items);
const totalCount = Object.values(items).reduce((s, it) => s + it.qty, 0);


return (
<header className="header">
<div className="brand" onClick={() => onNavigate('landing')}>NatureNest</div>
<nav>
<button onClick={() => onNavigate('products')}>Products</button>
<button onClick={() => onNavigate('cart')}>Cart</button>
<div className="cart-icon" onClick={() => onNavigate('cart')}>
🧺 <span className="cart-count">{totalCount}</span>
</div>
</nav>
</header>
);
}
```


---
