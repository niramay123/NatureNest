```javascript
import React from 'react';


export default function LandingPage({ onStart }) {
return (
<div className="landing">
<div className="landing-bg" />
<div className="landing-card">
<h1>NatureNest</h1>
<p>Bringing green to your home — simple, healthy and beautiful houseplants.</p>
<button onClick={onStart}>Get Started</button>
</div>
</div>
);
}
```


---
