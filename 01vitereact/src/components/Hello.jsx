import React from "react";
import Practice from "./Practice";

const Hello = () => {
  let myName = "Vishal";
  let fullName = () => {
    return "Vishal Sharma";
  };
  return (
    <>
      <h1>Hyy {fullName()}, How are you?</h1>
    </>
  );
};

export default Hello;
