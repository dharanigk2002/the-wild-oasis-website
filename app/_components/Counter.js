"use client";

import { useState } from "react";

function Counter({ data }) {
  const [count, setCount] = useState(0);
  console.log(data);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

export default Counter;
