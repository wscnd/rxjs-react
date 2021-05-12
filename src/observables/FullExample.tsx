import React, { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";

const count$ = new BehaviorSubject(0);

function FullExample() {
  const [count, setCount] = useState(count$.value);

  useEffect(() => {
    const subscription = count$.subscribe(setCount);
    return () => {
      subscription.unsubscribe();
    };
  }, [count$]);

  return (
    <div>
      <h2>Count</h2>
      {count === null ? (
        <label>Loading...</label>
      ) : (
        <>
          <span>Count is {count}</span>
          <br />
          <button onClick={() => count$.next(count + 1)}> +</button>
          <button onClick={() => count$.next(count - 1)}> -</button>
        </>
      )}
    </div>
  );
}

export { FullExample };
