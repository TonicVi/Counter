import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(null);
  function handleCountChange(e) {
    setCount(Number(e.target.value));
  }
    return (
      <div>
        <p>Le compteur est à : {count}</p>
        <input 
          value={count}
          onChange={handleCountChange}
        />
        <button onClick={() => setCount(count + 1)}>
          +1
        </button>
        <button onClick={() => setCount(count - 1)}>
          -1
        </button>
      </div>
    );
  }

export default Counter;