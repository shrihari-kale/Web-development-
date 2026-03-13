import { useState } from "react";

function Counter({ count, setCount }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}
export default Counter;
