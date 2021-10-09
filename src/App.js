import React from "react";
import { useState, useMemo, useCallback } from "react";

function External({ memoised }) {
  return <h2> {memoised()}</h2>;
}

const Ext = React.memo(External);

function App() {
  console.log("rendered Parent");
  const [counter, setCounter] = useState(0);

  const memoised = useCallback(() => {
    let sum = 0;
    for (let i = 0; i < counter; i++) {
      sum++;
    }
    console.log("sum");
    return sum;
  }, [counter]);

  return (
    <>
      <button onClick={() => setCounter((prev) => prev + 1)}> + </button>
      <Ext memoised={memoised}></Ext>
      <button onClick={() => setCounter((prev) => prev - 1)}> - </button>
    </>
  );
}
export default App;
