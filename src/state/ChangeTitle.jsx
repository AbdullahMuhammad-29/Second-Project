import React, { useState } from "react";

const ChangeTitle = () => {
  let [title, setTitle] = useState("This is a Title");

  const handleClick = () => {
    if (title == "This is a Title") {
      setTitle("This is a new Title");
    } else {
      setTitle("This is a Title");
    }
  };
  return (
    <>
      <div className="container mx-auto text-center">
        <h1 className="text-center text-5xl text-green-500">{title}</h1>

        <button
          onClick={handleClick}
          className="px-4 py-2 bg-green-500 rounded-full text-white my-1
hover:bg-green-600 cursor-pointer active:scale-95"
        >
          Change Title
        </button>
      </div>
    </>
  );
};

export default ChangeTitle;
