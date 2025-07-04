import { useState } from "react";
import Card from "./components/Card";

function App() {
  let myObj = {
    username: "vishal",
    age : 22
    
  }

  let newArr = [1, 2, 3]
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-tr-xl mb-4">Tailwind Test</h1>
      <Card btnText= "Click me" username= "code with vishuu" someObject = {newArr} />
      <Card username="Another card"/>
    </>
  );
}

export default App;
