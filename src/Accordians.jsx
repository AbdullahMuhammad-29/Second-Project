import React from "react";
import SingleAccordian from "./SingleAccordian";
import { questions } from "./questions";

const Accordians = () => {
  return (
    <>
      <div className="container perspective-distant mx-auto w-[50%] bg-gray-100 p-5 shadow-xl my-10">
        {questions.map((item, index) => {
          return <SingleAccordian {...item} key={index} />;
        })}
      </div>
    </>
  );
};

export default Accordians;
