import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SideBar from "./components/Sidebar";

function App() {
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      <Main />
      {showModal && (
        <SideBar showModal={showModal} handleToggleModal={handleToggleModal} />
      )}
      <Footer showModal={showModal} handleToggleModal={handleToggleModal}/>
    </>
  );
}

export default App;
