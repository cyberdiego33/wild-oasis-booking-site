"use client";

import { useState } from "react";

const Counter = function () {
  const [count, setCounter] = useState(0);
  return <button onClick={() => setCounter((c) => c + 1)}>{count}</button>;
};

export default Counter;
