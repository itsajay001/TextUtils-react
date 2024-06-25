import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import { useState } from "react";
import Alert from "./Components/Alert";

function App() {
  const [alert, setalert] = useState(null);
  const [mode, setmode] = useState("light");
  const [textm, settextm] = useState("Enable Dark Mode");

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#141647";
      document.body.style.color = "white";
      settextm("Enable Light Mode");
      showalert("success", "Dark mode is enable");
      document.title = "React app- Dark-mode";
      
setInterval(()=>{
  document.title="plz download"
}, 2000)


    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      settextm("Enable Dark Mode");
      showalert("success", "Light mode is enable");
      document.title = "React app- light-mode";
    }
  };

  const showalert = (type, message) => {
    setalert({
      type: type,
      msg: message,
    });

    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  return (
    <>
      <Navbar
        title="Textutils"
        mode={mode}
        togglemode={togglemode}
        textm={textm}
      />

      <Alert alert={alert} />

      <div className="container my-3">
        <TextForm showalert={showalert} heading="Enter text" />

        {/* <About></About> */}
      </div>
    </>
  );
}

export default App;
