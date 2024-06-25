import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About"
import { useState } from "react";

function App() {
  const[mode, setmode]=useState("light");

  const togglemode = ()=>{
    if(mode==="light"){
      setmode("dark");
      document.body.style.backgroundColor="black"
    }
    else{
      setmode("light");
      document.body.style.backgroundColor="white"
    }

  }

  return (
    <>
      <Navbar title="Textutils" mode={mode} togglemode={togglemode}  />

      <div className="container my-3">

        <TextForm heading="Enter text" />

        {/* <About></About> */}
      </div>
    </>
  );
}

export default App;

