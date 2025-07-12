import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);

  const handleCount = () => {};
  return (
    <>
      <div className=".container text-center">
        <h1
          className={`text-9xl ${
            count > 0
              ? `text-green-500`
              : count == 0
              ? `text-black-500`
              : `text-red-500`
          }`}
        >
          {count}
        </h1>

        <button
          onClick={() => setCount(count + 1)}
          className="px-4 mx-3 rounded-full hover:bg-gradient-to-r cursor-pointer active:scale-95 transition-all duration-300 py-2 
        bg-gradient-to-l text-white from-red-500 to-blue-600"
        >
          Increase
        </button>

        <button
          onClick={() => setCount(0)}
          className="px-4 mx-3 rounded-full hover:bg-gradient-to-r cursor-pointer active:scale-95 transition-all duration-300 py-2 
        bg-gradient-to-l text-white from-red-500 to-green-500"
        >
          Reset
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="px-4 mx-3 rounded-full hover:bg-gradient-to-r cursor-pointer active:scale-95 transition-all duration-300 py-2 
        bg-gradient-to-l text-white from-purple-500 to-orange-500"
        >
          Decrease
        </button>
      </div>
    </>
  );
};

export default Counter;
