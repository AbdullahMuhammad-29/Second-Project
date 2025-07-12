import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Values from "values.js";
import SingleColor from "./SingleColor";

const Color = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleColor = () => {
    if (!input) {
      toast.error("Please enter a color value");
    } else {
      try {
        const color = new Values(input).all(10);
        setList(color);
      } catch (error) {}
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-[40vh] px-4">
        <div className="w-full max-w-xl bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-md p-8">
          <form>
            <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">
              🎨 Color Generator
            </h2>
            <label htmlFor="color" className="text-gray-600 font-medium">
              Enter Color Name or Hex Code
            </label>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              id="color"
              type="text"
              placeholder="#3498db or blue"
              className="mt-2 mb-4 px-4 py-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
            />
            <button
              onClick={handleColor}
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md"
            >
              Generate Color
            </button>
          </form>
        </div>
      </div>

      <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 px-4 mx-auto">
        {list?.map((item, index) => {
          return <SingleColor {...item} hexCode={item.hex} key={index} />;
        })}
      </div>
    </>
  );
};

export default Color;
