import { useState, useEffect } from "react";
import "./App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SideBar from "./components/Sidebar";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  //runs this function everytime the page loads
  //empty dependency arrays allows you to define an async function

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;

      // const today = new Date().toDateString();
      // const localKey = `NASA-${today}`;
      // if (localStorage.getItem(localKey)) {
      //   const apiData = JSON.parse(localStorage.getItem(localKey));
      //   setData(apiData);
      //   console.log("FETCHED FROM CACHE")
      //   //this local storage goal is the fetch data from cache so it doesn't need to keep pulling
      //   return;
      // }
      // localStorage.clear()

      try {
        const res = await fetch(url);
        const apiData = await res.json();
        //localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData);
        console.log("FETCHED FORM API")
        console.log("DATA\n", data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchAPIData();
  }, []);

  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && (
        <SideBar data={data} handleToggleModal={handleToggleModal} />
      )}
      {data && <Footer data={data} handleToggleModal={handleToggleModal} />}
    </>
  );
}

export default App;
