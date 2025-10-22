
import React from 'react';


export default function ProductCard({ product, onAdd, disabled }) {
return (
<div className="card">
<img src={product.thumbnail} alt={product.name} className="thumb" />
<h3>{product.name}</h3>
<p>₹{product.price}</p>
<button onClick={() => onAdd(product)} disabled={disabled}>{disabled ? 'Added' : 'Add to Cart'}</button>
</div>
);
}
