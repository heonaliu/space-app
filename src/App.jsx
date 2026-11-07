import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SideBar from "./components/Sidebar";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Main />
      {showModal && (
        <SideBar showModal={showModal} setShowModal={setShowModal} />
      )}

      <Footer />
    </>
  );
}

export default App;
