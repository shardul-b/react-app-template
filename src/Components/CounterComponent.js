import React, { useState } from 'react';
function CounterComponent() {
  // Create state
  const [count, setCount] = useState(0);
  return (
    <div>
      <span>Count: </span>
      <span>{count}</span>
      {/* Update the state value on every click */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default CounterComponent;
