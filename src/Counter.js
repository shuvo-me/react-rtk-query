import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counter-slice";

export default function Counter() {
  const count = useSelector((state) => {
    console.log({ state });
    return state.counter.value;
  });
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
