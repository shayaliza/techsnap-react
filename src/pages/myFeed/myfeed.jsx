import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, setValue } from "./../../store";
function MyFeed() {
  const value = useSelector((state) => state.app.value);
  const dispatch = useDispatch();
  return (
    <div className="">
      <h1 className="text-2xl flex justify-center">Value: {value}</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => dispatch(setValue(10))}
      >
        Set Value to 10
      </button>
    </div>
  );
}

export default MyFeed;
