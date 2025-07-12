import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { RiArrowDropDownFill } from "react-icons/ri";

const SingleAccordian = ({ id, question, answer }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="p-3 rounded md shadow-xl my-3 bg-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-xl capitalize font-semibold">
            {question} {id}
          </h2>
          <RiArrowDropDownFill
            onClick={() => setShow(!show)}
            size={35}
            className={`cursor-pointer transition-all duration-300 ${
              show ? `rotate-180` : `rotate-0`
            }`}
          />
        </div>
        <p
          className={`text-gray-600 ${
            show ? `h-[70px] p-4` : `h-0`
          } overflow-hidden shadow bg=white transition-all rounded-md`}
        >
          {answer}
        </p>
      </div>
    </>
  );
};

export default SingleAccordian;
