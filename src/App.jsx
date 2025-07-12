import React from "react";
import "./globals.css";
import Api from "./apis/Api";
import ChangeTitle from "./state/ChangeTitle";
import Counter from "./state/Counter";
import Accordians from "./Accordians";
import Color from "./colorChanger/Color";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      {/* <Api /> */}
      {/* <ChangeTitle />
      <Counter /> */}
      <Color />
      <Toaster />
    </>
  );
};

export default App;
