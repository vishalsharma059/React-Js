import React from "react";
import "./index.css";
import Modal from "./components/Modal";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Controls from "./components/Controls";
import { useSelector } from "react-redux";
import PrivacyMessage from "./components/PrivacyMessage";

const App = () => {
  const privacy = useSelector((store) => store.privacy);
  return (
    <>
      <Modal>
        <Header />
        {privacy ? <PrivacyMessage /> : <DisplayCounter />}
        <Controls />
      </Modal>
    </>
  );
};

export default App;
