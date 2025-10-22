
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from './ProductCard';
import { addToCart } from '../actions/cartActions';


export default function ProductListing() {
const products = useSelector((s) => s.products.items);
const cartItems = useSelector((s) => s.cart.items);
const dispatch = useDispatch();


const categories = [...new Set(products.map(p => p.category))];


return (
<div className="product-listing">
<h2>Plants for Sale</h2>
<div className="categories">
{categories.map(cat => (
<div key={cat} className="category-block">
<h3>{cat}</h3>
<div className="grid">
{products.filter(p => p.category === cat).map(p => (
<ProductCard
key={p.id}
product={p}
onAdd={(product) => dispatch(addToCart(product))}
disabled={!!cartItems[p.id]}
/>
))}
</div>
</div>
))}
</div>
</div>
);
}

