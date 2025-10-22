```javascript
import React, { useState } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import ProductListing from './components/ProductListing';
import CartPage from './components/CartPage';


export default function App() {
const [page, setPage] = useState('landing');


const navigate = (p) => setPage(p);


return (
<div className="app">
<Header onNavigate={navigate} />
<main>
{page === 'landing' && <LandingPage onStart={() => navigate('products')} />}
{page === 'products' && <ProductListing />}
{page === 'cart' && <CartPage onContinue={() => navigate('products')} />}
</main>
</div>
);
}
```


---
