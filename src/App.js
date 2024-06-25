import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About"
import { useState } from "react";

function App() {
  const[mode, setmode]=useState("light");
  const[textm, settextm]=useState("Enable Dark Mode");

  const togglemode = ()=>{
    if(mode==="light"){
      setmode("dark");
      document.body.style.backgroundColor= "#141647"
      document.body.style.color="white"
      settextm("Enable Light Mode")
    }
    else{
      setmode("light");
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
      settextm("Enable Dark Mode")
    }

  }

  return (
    <>
      <Navbar title="Textutils" mode={mode} togglemode={togglemode}  textm={textm}  />

      <div className="container my-3">

        <TextForm heading="Enter text"  />

        {/* <About></About> */}
      </div>
    </>
  );
}

export default App;

