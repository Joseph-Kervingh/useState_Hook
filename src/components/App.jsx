import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function Increase() {
    setCount(count + 1);
  }

  function Decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={Decrease}>-</button>
      <button onClick={Increase}>+</button>
    </div>
  );
}

export default App;
