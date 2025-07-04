import { useState } from "react";
import Container from "./components/Container";
import Greeting from "./components/Greeting";
import Hello from "./components/Hello";
import Practice from "./components/Practice";
import "./index.css";
import CurrentTime from "./components/CurrentTime";

function App() {
  const username = "vishuu";
  const [textToShow, setTextToShow] = useState("Food items to show!!");

  const [food, setFood] = useState([]);

  const handleKeyDown = (event) => {
    console.log(event.target.value);
    if (event.key == "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...food, newFoodItem];
      setFood(newItems);
    }
  };

  return (
    <Container>
      {/* <Greeting /> */}
      {/* <Hello /> */}
      {/* <Practice items={food} handleKeyDown={handleKeyDown} text={textToShow} /> */}
      <CurrentTime />
    </Container>
  );
}

export default App;
