import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoCheckmarkDoneOutline, IoCopyOutline } from "react-icons/io5";

const SingleColor = ({ rgb, hexCode }) => {
  const [copy, setCopy] = useState(false);
  const handleCopy = () => {
    setCopy(true);
    navigator.clipboard.writeText(`#${hexCode}`);
    toast.success("Copied to clipboard");

    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };
  return (
    <>
      <div
        style={{
          backgroundColor: `rgb(${rgb})`,
        }}
        className="p-15 shadow-lg relative my-4"
      >
        {copy ? (
          <IoCheckmarkDoneOutline
            onClick={handleCopy}
            size={25}
            className="absolute top-5 left-5 cursor-pointer"
          />
        ) : (
          <IoCopyOutline
            onClick={handleCopy}
            size={25}
            className="absolute top-5 left-5 cursor-pointer"
          />
        )}

        <h5 className="text-xl text-center">{hexCode}</h5>
      </div>
    </>
  );
};

export default SingleColor;
