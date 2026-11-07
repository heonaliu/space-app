import { useState, useEffect } from "react";
import "./App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SideBar from "./components/Sidebar";

function App() {
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  //runs this function everytime the page loads
  //empty dependency arrays allows you to define an async function

  useEffect(() => {
    async function fetchAPIData() {
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;
    }
  }, []);

  return (
    <>
      <Main />
      {showModal && <SideBar handleToggleModal={handleToggleModal} />}
      <Footer handleToggleModal={handleToggleModal} />
    </>
  );
}

export default App;
